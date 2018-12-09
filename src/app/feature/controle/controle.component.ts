import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-controle',
  templateUrl: './controle.component.html',
  styleUrls: ['./controle.component.css']
})
export class ControleComponent implements OnInit {

  socket: SocketIOClient.Socket;
  posicao = {
    direta: 0,
    esquerda: 0,
    cima: 0,
    baixo: 0
  };

  constructor() {
    this.socket = io.connect('http://192.168.0.13:8000');
  }

  ngOnInit() {
  }

  mover(posicao) {
    this.posicao[posicao] = this.posicao[posicao] + 100;
    const message = {
      id: 'teste',
      counter: this.posicao[posicao]
    };
    this.socket.emit(posicao, message);
    console.log(posicao + ' -> ', this.posicao[posicao]);
  }


}
