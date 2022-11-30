import multer from 'multer';
import 'dotenv/config';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];

        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = require('crypto')
            .randomBytes(32)
            .toString('hex');
        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`);
        //Azure(`${novoNomeArquivo}.${extensaoArquivo}`,extensaoArquivo.toUpperCase())
    }
});

const Upload = multer({ storage });

export default Upload;