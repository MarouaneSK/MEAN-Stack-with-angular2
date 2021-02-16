import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';




import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


 let headers = new HttpHeaders({
    'Content-Type': 'application/json'
 });
 let options: {
  headers?: HttpHeaders | {[header: string]: string | string[]},
  observe?: 'body' | 'events' | 'response',
  params?: HttpParams|{[param: string]: string | string[]},
  reportProgress?: boolean,
  responseType?: 'arraybuffer'|'blob'|'json'|'text',
  withCredentials?: boolean,
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain ='http://localhost:8080/';
  authToken:any;
  user:any;
  options:any;
  public jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(private http: HttpClient,) { }

         decodeToken() {
             const token = localStorage.getItem('token');
             return this.jwtHelper.decodeToken(this.authToken);
         }
  //constructor(private http :HttpClient,public jwtHelper: JwtHelperService) {



  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new HttpHeaders({

        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      });
  }

  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
  }


  registerUser(user: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.domain +'authentication/register', user, { headers: headers });
  }

  registerMedcin(medcin:any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.domain +'authentication/register-medcin', medcin, { headers: headers });
  }
    // Function to check if username is taken
    checkUsername(username:string) {
      return this.http.get(this.domain + 'authentication/checkUsername/' + username,{ headers: headers });
    }

    // Function to check if e-mail is taken
    checkEmail(email: string) {

      return this.http.get(this.domain + 'authentication/checkEmail/' + email,{ headers: headers });
    }


    login(user: { username: any; password: any; }) {
      return this.http.post(this.domain + 'authentication/login', user,{ headers: headers });
    }

    logout() {
      this.authToken = null; // Set token to null
      this.user = null; // Set user to null
      localStorage.clear(); // Clear local storage
    }

    storeUserData(token: string, user: any) {
      localStorage.setItem('token', token); // Set token in local storage
      localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
      this.authToken = token; // Assign token to be used elsewhere
      this.user = user; // Set user to be used elsewhere
    }

    // getProfile() {
    //   this.createAuthenticationHeaders(); // Create headers before sending to API
    //   return this.http.get(this.domain + '/authentication/profile', this.options);
    // }
    getProfile() {
      this.createAuthenticationHeaders();
      this.loadToken();
      let headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authToken
      });
      return this.http.get(this.domain + "authentication/profile", {
        headers
      });
    }


    loggedIn() {
      return this.jwtHelper.isTokenExpired(); // true or false
    }


}
