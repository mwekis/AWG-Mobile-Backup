import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Icon names can be found here https://ionicons.com/
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'new-order',
    loadChildren: () => import('./new-order/new-order.module').then( m => m.NewOrderPageModule)
  },
  {
    path: 'contact-csc',
    loadChildren: () => import('./contact-csc/contact-csc.module').then( m => m.ContactCSCPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'order-review/:number',
    loadChildren: () => import('./order-review/order-review.module').then( m => m.OrderReviewPageModule)
  },
  {
    path: 'order-details/:number/:date',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
