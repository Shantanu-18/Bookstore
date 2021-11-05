import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/BookServices/book.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  review: any;
  book: any;
  bookId: any;
  data: any;
  orderCount = 1;
  addToBagHide: boolean = true;
  countHide: boolean = false;

  constructor(private bookService: BookService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem('bookId');
    this.bookDetails();
  }

  bookDetails() {
    this.bookService.gelAllBookService().subscribe((res: any) => {
      res.result.forEach((element: any) => {
        if (element._id == this.bookId) {
          this.data = element;
        }
      });
      console.log(this.data);
    })
  }

  addtobagbuttonhide() {
    this.addToBagHide = false;
    this.countHide = true;
    this.bookService.addcartitem(this.data._id).subscribe((response) => {
      console.log(response);
    },
      (error) => console.log(error)
    )
  }

  countincrease() {
    this.orderCount += 1
    this.updateCount()
  }

  countdecrease() {
    if (this.orderCount > 0) {
      this.orderCount -= 1;
      this.updateCount()
    }
    else {
      return;
    }
  }

  updateCount() {
    let payload = {
      "quantityToBuy": this.orderCount
    }
    this.bookService.updateitemcount(this.data._id, payload).subscribe(
      (response) => { console.log(response) },
      (error) => console.log(error)
    )
  }

  addtowishlist() {
    this.bookService.addwishlist(this.data._id).subscribe(
      (response: any) => {
        console.log(response);
        this.snackbar.open(response.message, "close", {
          duration: 1800,
        })
      },
      (error) => console.log(error)
    )
  }

  homeButton() {
    this.router.navigateByUrl('/home/allbooks')
  }
}
