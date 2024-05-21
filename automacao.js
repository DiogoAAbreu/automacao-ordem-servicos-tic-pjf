const data = require("./data.js");
const { salvarArquivo, carregarArquivo, convertDocxToPdf } = require("./util.js");
const path = require("path")


const repositorioDestino = "./ordemServios";

for (let i = 0; i < data.length; i++) {
    const base = carregarArquivo("./ordemServios/base.docx")
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
    const tituloArquivo = `Ordem de Serviço ${numOs}- ${descricao}`;

    const arquivoSaida = path.join(repositorioDestino, `${tituloArquivo}.docx`);
    salvarArquivo(base, arquivoSaida);

}



console.log('Documentos gerados com sucesso!');