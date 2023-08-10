import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router,private authService : AuthService) { }

  gotoSrevrePage() {
    this.route.navigate(['/servers']);
  }

  ngOnInit() {
  }
  LoggedIn() { this.authService.logIn()}
  LoggedOut() {this.authService.logOut()}
}
