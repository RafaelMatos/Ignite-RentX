import { Request,Response } from "express";
import { CreateSpecificationUseCase } from '../createSpecification/CreateSpecificationUseCase';

class CreateSpecificationController{

    constructor(private createSpecificationUseCase : CreateSpecificationUseCase){

    }

    handle(request:Request,response:Response) : Response {

        const{name,description} = request.body
        //const createSpecificationsService = new CreateSpecificationUseCase(specificationsRepository);

         this.createSpecificationUseCase.execute({name,description});

         return response.status(201).send();
    }
}

export { CreateSpecificationController}