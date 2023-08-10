import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })

export class AuthService {

    loggedIn = false;
    isAuthenticated() {
        return new Promise((res, rej) => {
            setTimeout(() => { console.log(this.logIn); res(this.loggedIn); }, 800);
        })
    }
    logIn() { this.loggedIn = true };
    logOut() { this.loggedIn = false };
}