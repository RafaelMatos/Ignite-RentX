import { Request,Response } from "express";
import { CreateSpecificationUseCase } from '../createSpecification/CreateSpecificationUseCase';
import { container } from "tsyringe";
class CreateSpecificationController{

    handle(request:Request,response:Response) : Response {
        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
        const{name,description} = request.body

        createSpecificationUseCase.execute({name,description});

         return response.status(201).send();
    }
}

export { CreateSpecificationController}