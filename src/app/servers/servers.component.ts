import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No servers were created';
  serverName = 'testServer';
  serverCreated = false;
  servers = ['Testserver', 'Testserver2']
  toggleButtonState = true;
  buttonClicksLog = [];
  numberOfClicks = 0;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }

  onToggleDisplayParagraph(){
    var me = this;

    me.toggleButtonState = !this.toggleButtonState;

    me.numberOfClicks++;
    //me.buttonClicksLog.push(me.numberOfClicks);

    me.buttonClicksLog.push(new Date());
  }

}
