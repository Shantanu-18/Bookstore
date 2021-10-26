import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';

const routes: Routes = [
  { path: 'signup', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'allbooks', component: GetAllBooksComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
