import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import {inject,injectable} from 'tsyringe'

interface IRequest {
    name : string;
    description : string;
}
@injectable()
class CreateCategoryUseCase {
    constructor( 
        @inject("CategoriesRepository")
        private categoriesRepository : ICategoriesRepository
    ){}

    async execute({ name,description } : IRequest ) : Promise<void> {

        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            // return response.status(400).json({error : 'Category already exists!'});
            throw new Error('Category already exists!');
        }
        this.categoriesRepository.create({name,description});
    
    }
}

export { CreateCategoryUseCase }