import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName = localStorage.getItem('fullName');
  name = this.fullName?.split(" ")[0];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  homeButton() {
    this.router.navigateByUrl('/home/allbooks')
  }
}
