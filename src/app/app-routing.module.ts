import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'signup', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/home/allbooks', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'allbooks', component: GetAllBooksComponent },
      { path: 'quickview', component: QuickViewComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cart', component: CartComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
