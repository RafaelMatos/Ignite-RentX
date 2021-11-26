import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload{
  sub : string;
}

export async function ensureAuthenticated(request:Request, response:Response,next:NextFunction){
  const authHeader = request.headers.authorization;
  if(!authHeader){ 
    throw new AppError("Token missing!",401)
  }
  //Bearer 72897984uf984hf983hf3h7
  // [0] = Bearer
  // [1] = 72897984uf984hf983hf3h7S
  const [,token] = authHeader.split(" ");
  try{
    const{ sub : user_id }= verify(token,"91d5d827178c010c612cde91e6ef9e7e") as IPayload;  

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);
    if(!user){
      throw new AppError("User does not exists!",401)
    }
    next();
  }catch{
    throw new AppError("Invalid token!",401)
  }

};