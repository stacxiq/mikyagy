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
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { firebaseConfig } from './app.firebase';
import { HttpClientModule } from '@angular/common/http';
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
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatExpansionModule,
    MatSelectModule,
    HttpClientModule,
    MatFormFieldModule,
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
    LoadingService,
    DataService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {} },
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
