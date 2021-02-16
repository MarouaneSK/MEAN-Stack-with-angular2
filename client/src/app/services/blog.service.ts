import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';

@Injectable()
export class BlogService {

  options:any;
  authToken:any;

  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: HttpClient
  ) { }

  //Function to create headers, add token, to be used in HTTP requests
  createAuthenticationHeaders()
  {
    this.authService.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = new HttpHeaders({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authService.authToken // Attach token

    });
  }


  // Function to get token from client local storage
  loadToken() {
    this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
  }

  // Function to create a new blog post
  newBlog(blog: any) {
    this.createAuthenticationHeaders();
      this.authService.loadToken();
      this.options = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authService.authToken
      });
      return this.http.post(this.domain + "blogs/newBlog", blog,{headers:this.options});

  }

  getAllBlogs() {
    this.createAuthenticationHeaders();
      this.authService.loadToken();
      this.options = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: this.authService.authToken
      });
      return this.http.post(this.domain + 'blogs/allBlogs',{headers:this.options});
    }



    getSingleBlog(id:any) {
      this.createAuthenticationHeaders();
        this.authService.loadToken();
        let headers = new HttpHeaders({
          "Content-Type": "application/json",
          Authorization: this.authService.authToken
        });
        return this.http.post(this.domain + 'blogs/singleBlog' + id,{headers:headers});
      }



    editBlog(blog:any)  {
      this.createAuthenticationHeaders();
        this.authService.loadToken();
        this.options = new HttpHeaders({

          "Content-Type": "application/json",
          Authorization: this.authService.authToken
        });
        return this.http.post(this.domain + 'blogs/singleBlog' + blog,{headers:this.options});
      }

      deleteBlog(id:any)  {
        this.createAuthenticationHeaders();
          this.authService.loadToken();
          this.options = new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: this.authService.authToken
          });
          return this.http.post(this.domain + 'blogs/deleteBlog/' + id,{headers:this.options});
        }
        likeBlog(id:any)  {
          this.createAuthenticationHeaders();
          const blogData = { id: id };
            this.authService.loadToken();
            this.options = new HttpHeaders({
              "Content-Type": "application/json",
              Authorization: this.authService.authToken
            });
            return this.http.post(this.domain +'blogs/likeBlog/', blogData,{headers:this.options});
          }
          dislikeBlog(id:any)  {
            this.createAuthenticationHeaders();
            const blogData = { id: id };
              this.authService.loadToken();
              this.options = new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: this.authService.authToken
              });
              return this.http.post(this.domain +'blogs/dislikeBlog/', blogData,{headers:this.options});
            }


}
