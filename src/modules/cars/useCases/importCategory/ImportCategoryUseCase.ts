import fs from 'fs';
import csvParse from "csv-parse";

class ImportCategoryUseCase {

    /**
     *
     * Recebe arquivo do controller/Insomnia
     * Cria um stream de leitura do arquivo
     * Passa o caminho do arquivo que quer ler
     * Pega os pedaços lidos e passa para o parseFile
    */

    execute( file : Express.Multer.File ) {
        const stream = fs.createReadStream(file.path);
        const parseFile = csvParse();
        stream.pipe(parseFile);

        parseFile.on("data", async (line) =>{
            console.log(line);
        });
    }
}

export { ImportCategoryUseCase }