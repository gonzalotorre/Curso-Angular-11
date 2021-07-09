import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dadoIzd = './../assets/img/dice1.png';
  dadoDrch= './../assets/img/dice1.png';
  number1 = 0;
  number2 = 1;

  tirarDados(): void {
    this.number1 = Math.round(Math.random() * 5) + 1;
    this.dadoIzd = './../assets/img/dice' + this.number1 + '.png';
    this.number2 = Math.round(Math.random() * 5) + 1;
    this.dadoDrch = './../assets/img/dice' + this.number2 + '.png';
  }

}
