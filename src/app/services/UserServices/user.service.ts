import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseUrl = environment.BaseUrl

  constructor(private httpService: HttpService) { }

  signupService(data:any){
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.httpService.PostService(this.BaseUrl + '/bookstore_user/registration', data, true, headers);
  }

  loginService(reqData: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      })
    }
    return this.httpService.PostService(this.BaseUrl + '/bookstore_user/login', reqData, true, headers);
  }
}
