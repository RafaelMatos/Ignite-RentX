import { Router } from 'express';
import { categoriesRoutes } from '../routes/categories.routes';
import { specificationRoutes } from '../routes/specifications.routes';

const router = Router();

router.use("/categories",categoriesRoutes);

router.use('/specifications',specificationRoutes);

export { router };