import { Component, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef, DoCheck, AfterViewChecked } from '@angular/core';
import { Message } from './models/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  public message: Message;
  public messages: Message[];

  @ViewChild('scrollMe') private scrollMe: ElementRef;


  constructor() {
    this.message = new Message('', '', false);
    this.messages = [
      new Message('Hi, Welcome to my site. I\'m Dinesh Haribabu in bot form. You can ask me any questions about my professional experience. I\'ll try my best to answer.', 'assets/images/bot.png', true)
    ];
    setTimeout(()=> {
      this.messages.push(
        new Message('You can ask about my current company, skillset, projects that I\'ve worked and so on.', 'assets/images/bot.png', true)
      );
    }, 2000);
    setTimeout(()=> {
      this.messages.push(
        new Message('I\'m still in development phase. I\'m improving day by day.', 'assets/images/bot.png', true)
      );
    }, 4000);
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollMe.nativeElement.scrollTop = this.scrollMe.nativeElement.scrollHeight;
    }
    catch (err) {
      console.log('Could not find the "scrollMe" element.');
    }
  }
}