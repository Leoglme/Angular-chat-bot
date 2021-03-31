import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
// @ts-ignore
import {ApiAiClient} from 'api-ai-javascript/es6/ApiAiClient.js';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  constructor() { }

  // tslint:disable-next-line:typedef
  talk(){
    this.client.textRequest('What your name')
      .then((res: any) => console.log(res));
  }
}
