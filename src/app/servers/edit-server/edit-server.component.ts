import { Component, OnInit } from '@angular/core';

import { ServersService, servertype } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: servertype = {id : 0, name : '', status : ''};
  serverName : string | null = '';
  serverStatus : string | null  = '';

  constructor(private serversService: ServersService,
              private activatedRoute : ActivatedRoute,) { }

  ngOnInit() {
    //this.server = this.serversService.getServer(1);
    
    this.activatedRoute.params.subscribe(param => {
     // console.log(this.activatedRoute.snapshot.queryParams['allowEdit']);
     //console.log(this.activatedRoute.snapshot.fragment === null ? '1' : '0');
      //console.log(param["id"]);
      this.server = this.serversService.getServer(+param["id"]);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
      });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
