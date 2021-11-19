import { getRepository, Repository } from 'typeorm'
import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from '../../entities/User';
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository{

  private repository : Repository<User>;
  constructor(){
      this.repository = getRepository(User);
  }

  async create({name,username,email,driver_license,password}: ICreateUserDTO): Promise<void> {
    console.log("Chegou no create UsersRepository");
    const user = this.repository.create({
      name,username,email,driver_license,password
    });
    console.log("passou create usersRepository"+ user);
    await this.repository.save(user);
  }

}
export{ UsersRepository}