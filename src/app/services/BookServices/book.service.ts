import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  BaseUrl = environment.BaseUrl

  constructor(private httpService: HttpService) { }

  gelAllBookService() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.httpService.PostService(this.BaseUrl + '/bookstore_user/get/book', false, headers);
  }
}
