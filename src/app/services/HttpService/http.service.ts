import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  PostService(url: string, data: any = null, isHeaderRequired: any = false, headers: any = null) {
    return this.http.post(url, data, isHeaderRequired && headers)
  }

  GetService(url: string,isHeaderRequired: any = false, headers: any = null) {
    return this.http.get(url,isHeaderRequired && headers)
  }

}
