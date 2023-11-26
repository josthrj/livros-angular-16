import { Injectable } from '@angular/core';
import { Editora } from './editora';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora> = [
    new Editora(1, 'Editora A'),
    new Editora(2, 'Editora B'),
    new Editora(3, 'Editora C')
    // Agrega más editoras si es necesario
  ];

  private livros: Array<Livro> = [
    { codLivro: 1, titulo: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor 1', 'Autor 2'], codEditora: 1 },
    { codLivro: 2, titulo: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor 3', 'Autor 4'], codEditora: 2 },
    { codLivro: 3, titulo: 'Lsivro C', resumo: 'Resumo do Livro C', autores: ['Autor 5', 'Autor 6'], codEditora: 3 }
    // Agrega más livros si es necesario
];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
    return editoraEncontrada?.nome;
  }

  getLivros(): Array<Livro> {
    return this.livros;
  }

  incluirLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  excluirLivro(codLivro: number): void {
    this.livros = this.livros.filter(livro => livro.codLivro !== codLivro);
  }
}
