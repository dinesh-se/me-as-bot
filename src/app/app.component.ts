import { Component } from '@angular/core';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message : Message;
  public messages : Message[];


  constructor() {
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Hi, Welcome to my site. I\'m Dinesh Haribabu in bot form. You can ask me any questions about my professional experience. I\'ll try my best to answer.', 'assets/images/bot.png', new Date())
    ];
  }
}