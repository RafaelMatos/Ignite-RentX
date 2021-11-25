import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload{
  sub : string;
}

export async function ensureAuthenticated(request:Request, response:Response,next:NextFunction){
  const authHeader = request.headers.authorization;
  if(!authHeader){ 
    throw new Error("Token missing!")
  }
  //Bearer 72897984uf984hf983hf3h7
  // [0] = Bearer
  // [1] = 72897984uf984hf983hf3h7S
  const [,token] = authHeader.split(" ");
  try{
    const{ sub : user_id }= verify(token,"91d5d827178c010c612cde91e6ef9e7e") as IPayload;  
    console.log("Sub:",user_id);

    const userRepository = new UsersRepository();
    const user = await userRepository.findById(user_id);
    if(!user){
      throw new Error("User does not exists!")
    }
    next();
  }catch{
    throw new Error("Invalid token!")
  }

};