import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-former-chat',
  templateUrl: './former-chat.component.html',
  styles: [`
  ::ng-deep nb-layout-column {
    display: flex;
    justify-content: center;
  }
  :host {
    display: flex;
  }
  nb-chat {
    width: 800px;
    margin: 1rem;
  }
`]})
export class FormerChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  messages: any[] = [];

  sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    const files = !event.files ? [] : event.files.map((file: { src: any; type: any; }) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });
  this.messages.push({
    text: event.message,
    date: new Date(),
    reply: reply,
    type: files.length ? 'file' : 'text',
    files: files,
    user: {
      name: userName,
      avatar: avatar,
    },
  });
}

}
