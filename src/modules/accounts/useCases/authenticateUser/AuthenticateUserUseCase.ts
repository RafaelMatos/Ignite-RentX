import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { sign } from "jsonwebtoken"

import { compare } from 'bcryptjs'
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email:string;
  password:string;
}

interface IResponse {
  user:{
    name : string;
    email : string;
  };
  token : string;

}
@injectable()
class AuthenticateUserUseCase {

  constructor(

    @inject("UsersRepository")
    private userRepository : IUsersRepository
  ){}

  async execute( { email, password } : IRequest) : Promise<IResponse>{
    //Usuario existe
    const user = await this.userRepository.findByEmail(email);
    if(!user){
      throw new AppError('Email or password incorrect');
    }
    //Senha está correta
    const passwordMatch = await compare( password,user.password )
    if(!passwordMatch){
      throw new AppError('Email or password incorrect');
    }
    //Gerar jsonwebtokem
    const token = sign( {} ,"91d5d827178c010c612cde91e6ef9e7e",{
      subject : user.id,
      expiresIn :"1d",
    });

    const tokenReturn : IResponse = {
      token,
      user : {
        name: user.name,
        email: user.email
      }
    }
    return tokenReturn;
  }
}

export { AuthenticateUserUseCase }