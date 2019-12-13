import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FirebaseService } from './services/firebase.service';
import { LoadingService } from './services/loading.service';
import { DataService } from './services/data.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AngularFireModule } from '@angular/fire/';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FirestoreSettingsToken, AngularFirestoreModule } from '@angular/fire/firestore';
import { DatePipe } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { FCM } from '@ionic-native/fcm/ngx';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { firebaseConfig } from './app.firebase';
import { AboutUsPageModule } from './about-us/about-us.module';
import { AccountPageModule } from './account/account.module';
import { BrandsPageModule } from './brands/brands.module';
import { CallUsPageModule } from './call-us/call-us.module';
import { CartPageModule } from './cart/cart.module';
import { CategoryPageModule } from './category/category.module';
import { CheckoutPageModule } from './checkout/checkout.module';
import { EventsPageModule } from './events/events.module';
import { HomePageModule } from './home/home.module';
import { LoginPageModule } from './login/login.module';
import { PostDetailsPageModule } from './post-details/post-details.module';
import { PostsByCategoryPageModule } from './posts-by-category/posts-by-category.module';
import { PrivacyPolicyPageModule } from './privacy-policy/privacy-policy.module';
import { ProductDetailsPageModule } from './product-details/product-details.module';
import { ProductsByCategoryPageModule } from './products-by-category/products-by-category.module';
import { SectionsPageModule } from './sections/sections.module';
import { SignupPageModule } from './signup/signup.module';
import { UserEditPageModule } from './user-edit/user-edit.module';
import { VerifyPageModule } from './verify/verify.module';
import { Facebook } from '@ionic-native/facebook/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(
     {mode: 'ios'}
    ),
    FormsModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    AboutUsPageModule,
    AccountPageModule,
    BrandsPageModule,
    CallUsPageModule,
    CartPageModule,
    CategoryPageModule,
    CheckoutPageModule,
    EventsPageModule,
    HomePageModule,
    LoginPageModule,
    PostDetailsPageModule,
    PostsByCategoryPageModule,
    PrivacyPolicyPageModule,
    ProductDetailsPageModule,
    ProductsByCategoryPageModule,
    SectionsPageModule,
    SignupPageModule,
    UserEditPageModule,
    VerifyPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    InAppBrowser,
    AppAvailability,
    FirebaseService,
 
    CallNumber,
    DatePipe,
    FCM,
    Facebook,
    LoadingService,
    DataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
