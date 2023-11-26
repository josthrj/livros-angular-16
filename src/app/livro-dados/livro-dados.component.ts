import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {

  livro: Livro = new Livro(1, 6, 'A powerful story about self-discovery and personal identity.', '4th Edition', ['J.D. Salinger']);
  autoresForm: string = '';
  editoras: Array<Editora> = [];

  private servEditora: ControleEditoraService;
  private servLivros: ControleLivrosService;
  private router: Router;

  constructor(servEditora: ControleEditoraService, servLivros: ControleLivrosService, router: Router) {
    this.servEditora = servEditora;
    this.servLivros = servLivros;
    this.router = router;
  }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.adicionarLivro(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
