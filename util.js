const fs = require("fs");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const libre = require('libreoffice-convert');
const path = require("path");

const carregarArquivo = (caminhoBase) => {
    const conteudo = fs.readFileSync(caminhoBase, 'binary')
    const zip = new PizZip(conteudo);
    return new Docxtemplater(zip);
};

const salvarArquivo = (base, repositorioDestino) => {
    const buffer = base.getZip().generate({ type: 'nodebuffer' });
    fs.writeFileSync(repositorioDestino, buffer);
};

const converterPdf = (nomeArquivo) => {
    const filePath = path.join(__dirname, `./ordemServicos/${nomeArquivo}.docx`);
    const outputPath = path.join(__dirname, `./osPDF/${nomeArquivo}.pdf`);

    const file = fs.readFileSync(filePath);

    const ext = '.pdf';

    libre.convert(file, ext, undefined, (err, done) => {
        if (err) {
            console.error(`Erro na conversão do arquivo: ${err}`);
            return;
        }

        fs.writeFileSync(outputPath, done);
    });

}

const removerBarra = (tituloArquivo) => {
    let tituloArquivoSemBarra = tituloArquivo;
    while (tituloArquivo !== tituloArquivoSemBarra) {
        tituloArquivoSemBarra.replace("/", " ");
    };
}


module.exports = {
    carregarArquivo,
    salvarArquivo,
    converterPdf,
    removerBarra,
}