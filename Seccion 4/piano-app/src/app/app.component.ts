import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  emitSound(soundNumber: number): void {
    const audio = new Audio();
    audio.src = './../assets/sounds/note' + soundNumber + '.wav';
    audio.load();
    audio.play();
  }
  
}
