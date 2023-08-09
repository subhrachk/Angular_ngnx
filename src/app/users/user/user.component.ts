import { Component, OnInit } from '@angular/core';
import { usertype } from '../users.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: usertype = {id: 0, name: ''};

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.user.id = param["id"];
      this.user.name = param["name"];
    });
  }

}
