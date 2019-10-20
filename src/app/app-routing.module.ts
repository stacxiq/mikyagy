import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'call-us', loadChildren: './call-us/call-us.module#CallUsPageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'posts-by-category/:id/:name', loadChildren: './posts-by-category/posts-by-category.module#PostsByCategoryPageModule' },
  { path: 'post-details/:id/:name', loadChildren: './post-details/post-details.module#PostDetailsPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'brands', loadChildren: './brands/brands.module#BrandsPageModule' },
  { path: 'products-by-category', loadChildren: './products-by-category/products-by-category.module#ProductsByCategoryPageModule' },
  { path: 'product-details', loadChildren: './product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'account/:userid', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'verify/:fromfacebook', loadChildren: './verify/verify.module#VerifyPageModule' },
  { path: 'user-edit/:fromfacebook', loadChildren: './user-edit/user-edit.module#UserEditPageModule' },
  { path: 'category/:brand', loadChildren: './category/category.module#CategoryPageModule' },
  { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutPageModule' },
  { path: 'sections', loadChildren: './sections/sections.module#SectionsPageModule' },
  { path: '**', redirectTo: '/home' },
  { path: 'sections', loadChildren: './sections/sections.module#SectionsPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
