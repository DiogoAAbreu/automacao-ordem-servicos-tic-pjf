<h1><strong>Automação para Criação de Ordem de Serviços</strong></h1>
<p>Este script serve para automatizar a edição de Ordem de Serviços (OS's). Para evitar que cada ordem de serviço seja feita uma de cada vez, demando muito tempo, foi gerado esse script onde é possível ler um arquivo .docx de base. Com base nesse arquivo podem ser criadas OS's com base em uma lista de objetos contendo as informações necessárias.</p>
<h3>Bibliotecas Utilizadas</h3>
<p>-docxtemplater</p>
<p>-pizzip</p>
<p>-libreoffice-convert</p>
<p>-fs (nativa)</p>
<p>-path (nativa)</p>
<h2>COMO UTILIZAR?</h2>
<p><strong>NECESSÁRIO TER O SOFTWARE LIBRE OFFICE INSTALADO NA MÁQUINA</strong></p>
<p>1. Para utlizar o script, é necessário efetuar o Fork do arquivos para sua maquina.</p>
<p>2. Com o sistema em sua maquina, abra a pasta principal com sua IDE.</p>
<p>3. Abra o console e digite o comando "npm i", para instalar todas as bibliotecas necessárias.</p>
<p>4. Execute o arquivo automacao.js com o comando no console: node automacao.js.</p>
<h4>O que vai acontecer?</h4>
<p>O script vai ler o arquivo "base.docx" que se encontra dentro da pasta "ordemServicos" com a biblioteca fs e passar o conteudo lido para o PizZip, onde vai ser passado para a biblioteca Docx Templater. A função setData do DocxTemplater vai setar as variáveis que foram definadas dentro do arquivo .docx {variavel} com as informações que se encontram dentro do arquivo data.js.</p>
<p>Ápos todos os arquivos .docx serem gerados com as informações contidades dentro da lista de objetos do arquivo .docx, a biblioteca libreoffice vai converter esses aquivos para PDF, utilizando o software da empresa para isso, todos arquivos serão salvos dentro da pasta osPDF.</p>

