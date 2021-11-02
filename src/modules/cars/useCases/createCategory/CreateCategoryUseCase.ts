import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name : string;
    description : string;
}

/**
 * [X] - Definir o tipo de retorno
 * [X] - Alterar o retorno de erro
 * [X] - Acessar o repositorio
 * 
*/

class CreateCategoryUseCase {
    constructor( private categoriesRepository : ICategoriesRepository){}

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