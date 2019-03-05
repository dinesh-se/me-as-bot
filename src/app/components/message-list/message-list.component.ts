import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Message } from '../../models/message';
import { MessageItemComponent } from '../message-item/message-item.component';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  messages: Message[];

  constructor() { }
  
  ngOnInit() {
  }

}