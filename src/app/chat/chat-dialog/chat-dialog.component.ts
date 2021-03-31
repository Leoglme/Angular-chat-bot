import { Component, OnInit } from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss']
})
export class ChatDialogComponent implements OnInit {

  constructor(private chat: ChatService) { }

  ngOnInit(): void {
    this.chat.talk();
  }

}
