import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  socket: SocketIOClient.Socket;
  @ViewChild('elemento') elemento: ElementRef;
  pos = {
    top: 50,
    left: 0
  };
  constructor() {
    this.socket = io.connect('http://192.168.0.13:8000');
  }



  ngOnInit() {
    this.conectarSocket();
  }

  conectarSocket() {
    this.socket.on('novaPosicao', (response: any) => {
      this.mover(response.pos, response.val);
    });
  }

  mover(posicao, valor) {
    switch (posicao) {
      case 'direta': {
        this.pos.left = this.pos.left + 100;
        this.elemento.nativeElement.style.cssText =
          'left: ' + this.pos.left + 'px; top: ' + this.pos.top + 'px';

        break;
      }
      case 'esquerda': {
        this.pos.left = this.pos.left - 100;
        this.elemento.nativeElement.style.cssText =
        'left: ' + this.pos.left + 'px; top: ' + this.pos.top + 'px';

        break;
      }
      case 'cima': {
        this.pos.top = this.pos.top - 100;
        this.elemento.nativeElement.style.cssText =
        'left: ' + this.pos.left + 'px; top: ' + this.pos.top + 'px';

        break;
      }
      case 'baixo': {
        this.pos.top = this.pos.top + 100;
        this.elemento.nativeElement.style.cssText =
        'left: ' + this.pos.left + 'px; top: ' + this.pos.top + 'px';

        break;
      }
      default: {
        this.pos.top = 50;
        this.pos.left = 0;
        this.elemento.nativeElement.style.cssText =
        'left: ' + this.pos.left + 'px; top: ' + this.pos.top + 'px';
        break;
      }
    }
  }
}
