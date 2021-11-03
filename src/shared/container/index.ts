import { container } from 'tsyringe'

import { ICategoriesRepository} from '../../modules/cars/repositories/ICategoriesRepository';
import { ISpecificationsRepository} from '../../modules/cars/repositories/ISpecificationsRepository';
import { CategoriesRepository} from '../../modules/cars/repositories/implementations/CategoriesRepository';
import { SpecificationsRepositoy} from '../../modules/cars/repositories/implementations/SpecificationsRepository';



container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository",
  SpecificationsRepositoy
)