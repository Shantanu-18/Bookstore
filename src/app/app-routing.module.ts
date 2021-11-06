import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AuthguardGuard } from './authguard.guard';
import { OrderPlacedComponent } from './components/order-placed/order-placed.component';

const routes: Routes = [
  { path: 'signup', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'home', redirectTo: '/home/allbooks', pathMatch: 'full' },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'allbooks', component: GetAllBooksComponent },
      { path: 'quickview', component: QuickViewComponent },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthguardGuard] },
      { path: 'cart', component: CartComponent, canActivate: [AuthguardGuard] },
      { path: 'wishlist', component: WishlistComponent, canActivate: [AuthguardGuard] },
      { path: 'orders', component: OrderPlacedComponent, canActivate: [AuthguardGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
