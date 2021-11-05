import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/BookServices/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName = localStorage.getItem('fullName');
  name = this.fullName?.split(" ")[0];
  cartNumber: any;

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    this.getCardNumber();
  }

  homeButton() {
    this.router.navigateByUrl('/home/allbooks');
  }

  profileButton() {
    this.router.navigateByUrl('/home/profile');
  }
  
  onCart() {
    this.bookService.getCartItems().subscribe((res: any) => {
      console.log(res.result);
    },
    (error) => console.log(error)
    )
    
    this.router.navigateByUrl('/home/cart')
  }
  
  getCardNumber() {
    this.bookService.getCartItems().subscribe((res: any) => {
      this.cartNumber = res.result.length;
      console.log("length", res.result.length);
    },
    (error) => console.log(error)
    )
  }

  onWishlist() {
    this.router.navigateByUrl('/home/wishlist');
  }
}
