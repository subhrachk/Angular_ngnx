import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../AuthService.service';
import { Observable, Subscription, filter, interval, map, pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  intSub: Subscription = new Subscription();

  customObservable = new Observable<number>(observer => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      if (count >= 3) { observer.complete() }
      if (count > 3) { observer.error(new Error('Count can not greater than 3!')) }
      count++;
    }, 1000)
  });

  constructor(private route: Router, private authService: AuthService) { }
  LoggedIn() { this.authService.logIn() }
  LoggedOut() { this.authService.logOut() }

  gotoSrevrePage() {
    this.route.navigate(['/servers']);
  }

  ngOnInit() {
    //this.intSub = this.customObservable.subscribe(count => console.log(count),error => console.log(error.message),()=>console.log("Counting Completed!"));

    const modCustObs = this.customObservable.pipe(filter(data => (data > 0)),map(data => {return 'Round ' + (data + 1)}));
    this.intSub = modCustObs.subscribe(
      count => console.log(count),
      error => console.log(error.message),
      () => console.log("Counting Completed!"));

  }

  ngOnDestroy() {
    this.intSub.unsubscribe();
  }
}
function data(this: (number: any) => string, value: unknown, index: number): unknown {
  throw new Error('Function not implemented.');
}

