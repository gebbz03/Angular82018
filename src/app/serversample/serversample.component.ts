import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serversample',
  templateUrl: './serversample.component.html',
  styleUrls: ['./serversample.component.css']
})
export class ServersampleComponent implements OnInit {
  serverId:number=10;
  serverStatus:string='online';

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  constructor() {
    this.serverStatus=Math.random() > 0.5 ? 'online' : 'offline';
   }

  ngOnInit() {
  }

}
