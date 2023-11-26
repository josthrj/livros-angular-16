import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: Array<Livro> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;

  constructor(private editoraService: ControleEditoraService, private livroService: ControleLivrosService) {
     this.servEditora = editoraService;
     this.servLivros = livroService;
  }

  ngOnInit(): void {
     this.livros = this.servLivros.getLivros();
     this.editoras = this.servEditora.getEditoras();
  }

  excluir = (codLivro: number): void => {
     this.servLivros.excluirLivro(codLivro);
     this.livros = this.servLivros.getLivros();
  }

  obterNome = (codEditora: number): string => {
     const nomeEditora = this.servEditora.getNomeEditora(codEditora);
     return nomeEditora ? nomeEditora : '';
  }
}
