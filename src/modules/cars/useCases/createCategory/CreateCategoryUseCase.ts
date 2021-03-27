import { CategoriesRepository } from "../../repositories/CategoriesRepository";
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

    execute({ name,description } : IRequest ) : void {

        const categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if(categoryAlreadyExists){
            // return response.status(400).json({error : 'Category already exists!'});
            throw new Error('Category already exists!');
        }
        this.categoriesRepository.create({name,description});
    
    }
}

export { CreateCategoryUseCase }