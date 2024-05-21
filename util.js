const fs = require("fs");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const carregarArquivo = (caminhoBase) => {
    const conteudo = fs.readFileSync(caminhoBase, 'binary')
    const zip = new PizZip(conteudo);
    return new Docxtemplater(zip);
};

const salvarArquivo = (base, repositorioDestino) => {
    const buffer = base.getZip().generate({ type: 'nodebuffer' });
    fs.writeFileSync(repositorioDestino, buffer);
};

module.exports = {
    carregarArquivo,
    salvarArquivo,
}