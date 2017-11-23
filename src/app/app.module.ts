import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { WebsocketService } from './websocket.service';
import { Statement } from '@angular/compiler/src/output/output_ast';
import { StateService } from './state.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ChatService,
    WebsocketService,
    StateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
