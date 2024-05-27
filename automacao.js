const data = require("./data.js");
const { salvarArquivo, carregarArquivo, converterPdf, removerBarra } = require("./util.js");
const path = require("path")


const repositorioDestino = "./ordemServicos";

for (let i = 0; i < data.length; i++) {
    const base = carregarArquivo("./ordemServicos/base.docx")
    const descricao = data[i].descricao;
    const valor = String(data[i].etapas[0].valor.toFixed(2)).replace(".", ",");
    const item = data[i].item;
    const numOs = i + 1;
    base.setData({ descricao, valor, numOs });

    try {
        base.render();
    } catch (error) {
        console.log(error);
    }
    const tituloArquivo = `Ordem de Serviço ${numOs}- ${descricao}`.replace(/\//g, " ");


    const arquivoSaida = path.join(repositorioDestino, `${tituloArquivo}.docx`);
    salvarArquivo(base, arquivoSaida);
    converterPdf(tituloArquivo);
}


console.log(path.join(__dirname, 'documento.docx'));


console.log('Documentos gerados com sucesso!');