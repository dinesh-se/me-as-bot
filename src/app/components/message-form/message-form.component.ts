import { Component, OnInit, Input } from '@angular/core';

import { Message } from '../../models/message';
import { DialogflowService } from '../../services/dialogflow.service';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  message : Message;

  @Input('messages')
  messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  sendMessage(): void {
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', true)
      );
    });

    this.message = new Message('', '', false);
}

}