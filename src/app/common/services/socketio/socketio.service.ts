import * as io from 'socket.io-client';

import { Observable, Observer } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;
  constructor() {
  }

  connectSocket():void{
    this.socket = io(environment.socketUrl);
  }

  sendMessage(message){
    this.socket.emit('my message',message)
  }


  receieveMessage():Observable<any>{
    return new Observable((observer:Observer<any>)=>{
      this.socket.on('message recieved',(msg)=>{
        observer.next(msg)
      })
    })
  }



}
