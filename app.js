let Reader = require('./Reader');
let Processor = require('./Procecssor');
let Table = require('./Table');
let HtmlParse = require('./HtmlParse');
let Write = require('./Writer');
let PDFWriter = require('./PDFWriter');

let leitor = new Reader();
let escritor = new Write();

async function main(){
    let data = await leitor.Read('./Animais.csv');
    let processed_data = Processor.Processor(data);
    let table = new Table(processed_data);
    let html = await HtmlParse.Parse(table);
    console.log(html);
    escritor.Write("htmlGerado.html", html);
    PDFWriter.WritePDF("novopdf.pdf", html);
}

main();