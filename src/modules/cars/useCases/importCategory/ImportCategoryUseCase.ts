import fs from 'fs';
import csvParse from "csv-parse";

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory{
    name:string;
    description:string;
}
class ImportCategoryUseCase {

    /**
     *
     * Recebe arquivo do controller/Insomnia
     * Cria um stream de leitura do arquivo
     * Passa o caminho do arquivo que quer ler
     * Pega os pedaços lidos e passa para o parseFile
    */
    constructor ( private categoriesRepository : ICategoriesRepository){}

    loadCategories(file : Express.Multer.File) : Promise<IImportCategory[]>{
        return new Promise((resolve,reject)=>{

            const categories : IImportCategory[] = [];

        const stream = fs.createReadStream(file.path);
        const parseFile = csvParse();
        stream.pipe(parseFile);

        parseFile.on("data", async (line) =>{
            const [name,description] = line;
            categories.push({
                name,
                description,
            })
        })
        .on("end", ()=>{
            fs.promises.unlink(file.path);
            resolve(categories);
        })
        .on("error",(err)=>{
            reject(err);
        })
        
        });
        
    };

  async  execute( file : Express.Multer.File ) : Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async category =>{
            const {name,description} = category;

            const existCategory = this.categoriesRepository.findByName(name);

            if(!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description
                });
            }
        })
        console.log(categories);
    }
}

export { ImportCategoryUseCase }