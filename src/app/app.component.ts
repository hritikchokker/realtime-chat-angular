import { Component } from '@angular/core';
import { HttpService } from './common/services/http/http.service';
import { SocketioService } from './common/services/socketio/socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-chat-app';

  constructor(private _socket:SocketioService,
              private _http:HttpService) {
    this._socket.connectSocket();

    this._http.get().subscribe(data=>{
      console.log(data,'data,')
    })
  }

  onkeypress(event){
    const message:string = event.target.value;
    if(message.length >4){
      this._socket.sendMessage(message);
    }
  }
}
