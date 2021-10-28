import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/BookServices/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  bookList: any;
  bookscount: any;
  box: any;
  selectedValue: any;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getAllBooks();
    this.box = [
      { "value": "Sort by relevance" },
      { "value": "Price : Low to High" },
      { "value": "Price : High to Low" },
      { "value": "Newest Arrivals" }
    ];
    this.selectedValue = this.box[0].value;
  }

  getAllBooks() {
    this.bookService.gelAllBookService().subscribe((res: any) => {
      console.log(res);
      console.log(res.result);

      this.bookList = res.result;
      this.bookscount = res.result.length;
    }, error => {
      console.log(error);
    }
    )
  }

  quickView(book: any) {
    console.log(book._id);

    localStorage.setItem('bookId', book._id);
    this.router.navigateByUrl('/home/quickview')
  }
}
