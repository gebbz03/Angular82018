import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serversample',
  templateUrl: './serversample.component.html',
  styleUrls: ['./serversample.component.css']
})
export class ServersampleComponent implements OnInit {
  serverId:number=10;
  serverStatus:string='Offline';

  getServerStatus(){
    return this.serverStatus;
  }

  constructor() { }

  ngOnInit() {
  }

}
