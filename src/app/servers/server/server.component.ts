import { Component, OnInit } from '@angular/core';

import { ServersService, servertype } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: servertype = {id : 0, name : '', status : ''};

  constructor(private serversService: ServersService, 
              private activatedRoute : ActivatedRoute,
              private router : Router
                ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {this.server = this.serversService.getServer(+p["id"])});
       // this.server = this.serversService.getServer(1);
  }

  EditServer(id : number | null) {
    //this.activatedRoute
    this.router.navigate(['/servers',id,'edit'],{queryParamsHandling: "preserve"});
  }

}
