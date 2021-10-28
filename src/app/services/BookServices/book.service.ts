import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseURL = environment.BaseUrl

  constructor(private http: HttpService) { }

  gelAllBookService() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.GetService(this.baseURL + '/bookstore_user/get/book', false, headers);
  }

  getwishlist() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }

    return this.http.GetService(this.baseURL + "/bookstore_user/get_wishlist_items", true, headers)
  }

  addcartitem(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.PostService(this.baseURL + "/bookstore_user/add_cart_item/" + productID, null, true, headers);
  }

  updateitemcount(productID: any, payload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.PutService(this.baseURL + "/bookstore_user/cart_item_quantity/" + productID, payload, true, headers);
  }

  getCartItems() {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }

    return this.http.GetService(this.baseURL + "/bookstore_user/get_cart_items", true, headers)
  }

  removecartitem(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.DeleteService(this.baseURL + "/bookstore_user/remove_cart_item/" + productID, null, true, headers);
  }

  orderplace(payload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.PostService(this.baseURL + "/bookstore_user/add/order", payload, true, headers);
  }



  addwishlist(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.PostService(this.baseURL + "/bookstore_user/add_wish_list/" + productID, null, true, headers);
  }

  removewishlistitem(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.DeleteService(this.baseURL + "/bookstore_user/remove_wishlist_item/" + productID, null, true, headers);
  }

  updateaddress(payload: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.PutService(this.baseURL + "/bookstore_user/edit_user", payload, true, headers);
  }
}
