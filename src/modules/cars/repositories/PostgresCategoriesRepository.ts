import { Category } from "../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository{
    findByName(name: string) {
        console.log(name);
        return null;
        // throw new Error("Method not implemented.");
    }
    list(): Category[] {
        // throw new Error("Method not implemented.");
        return null;
    }
    create({name,description}: ICreateCategoryDTO): void {
        console.log(name,description)
        // return null;
        // throw new Error("Method not implemented.");
    }

}

export {PostgresCategoriesRepository}