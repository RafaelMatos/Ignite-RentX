import {Category } from '../model/Category'

interface ICreateCategoryDTO {
    name:string;
    description:string;
}

interface ICategoriesRepository {

    findByName(name:string);
    list(): Category[];
    create({name,description}: ICreateCategoryDTO):void;

}
export { ICategoriesRepository,ICreateCategoryDTO};