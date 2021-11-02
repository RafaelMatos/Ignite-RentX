import { Specification } from "../entities/Specification";

interface ICreateSpecificationsRepositoryDTO {

    name:string;
    description:string;

}

interface ISpecificationsRepository{

    create({description,name}: ICreateSpecificationsRepositoryDTO);
    findByName(name : string) : Specification;
}

export { ISpecificationsRepository, ICreateSpecificationsRepositoryDTO }
