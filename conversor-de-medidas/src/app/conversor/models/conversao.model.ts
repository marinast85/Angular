export class Conversao{
    constructor(
        public unidade?: string,
        public from?: string,
        public to?: string,
        public valor?: number
    ){}

}


// unidade = "dados"
// from = "bit",
// to = "gbit",
// value = 150

// URL_BASE = "http://localhost:3001/"

// constructor(){}

// chamarApiConversao(parametros){
//     request URL_BASE + unidades.unidade + "/?from=" + from + "&to=" + to + "&value=" + this.value;
// }

// var unidades = {
//     dados: "data",
//     moeda: "currency"
// }