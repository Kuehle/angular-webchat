import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  newMessage = '';

  messages:Array<any> = []

  constructor(private chat: ChatService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.messages.push(msg);
      console.log(msg);
    })
  }

  sendMessage(messageText) {
    this.chat.sendMsg(messageText);
    this.newMessage = ''
  }

}