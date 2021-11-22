import { Router } from 'express';
import { categoriesRoutes } from '../routes/categories.routes';
import { specificationRoutes } from '../routes/specifications.routes';
import { authenticateRoutes } from './authentication.routes';
import { userRoutes } from './users.routes';

const router = Router();

router.use("/categories",categoriesRoutes);
router.use('/specifications',specificationRoutes);
router.use('/users',userRoutes);
router.use(authenticateRoutes);

export { router };