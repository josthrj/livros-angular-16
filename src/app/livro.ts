export class Livro {
    codLivro: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(codLivro: number, codEditora: number, titulo: string, resumo: string, autores: string[], ) {
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
        this.codLivro = codLivro;
    }
}