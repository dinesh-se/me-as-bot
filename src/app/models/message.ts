export class Message {
  content: string;
  avatar: string;
  isBot: boolean;

  constructor(content: string, avatar: string, isBot: boolean){
    this.content = content;
    this.avatar = avatar;
    this.isBot = isBot;
  }
}