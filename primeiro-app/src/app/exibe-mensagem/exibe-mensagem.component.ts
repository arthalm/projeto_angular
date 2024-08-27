import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exibe-mensagem',
  templateUrl: './exibe-mensagem.component.html',
  styleUrl: './exibe-mensagem.component.css'
})
export class ExibeMensagemComponent implements OnInit{
  mensagem: string;

  constructor () {
    this.mensagem = '';
  }
  ngOnInit() {
  }
  alterarMensagem(n: string) {
    console.log(`Seja bem vindo(a), ${n}`);
    this.mensagem = `Seja bem vindo(a), ${n}`;
  }
}
