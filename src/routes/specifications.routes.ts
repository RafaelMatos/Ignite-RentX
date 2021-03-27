import { request, response, Router } from 'express';

import { SpecificationsRepositoy } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepositoy();

    specificationRoutes.post('/',(request,response) => {
        const{name,description} = request.body
        const createSpecificationsService = new CreateSpecificationService(specificationsRepository);

         createSpecificationsService.execute({name,description});

         return response.status(201).send();
    })

export { specificationRoutes }
