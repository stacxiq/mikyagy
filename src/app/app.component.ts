import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseService } from './services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { Storage } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { WooService } from './services/woo.service';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;

  loggedIn: boolean;
  userid: any;
  categories: any[] = [];
  postCategories: any = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private fire: FirebaseService,
    private afauth: AngularFireAuth,
    private Fcm: FCM,
    private menu: MenuController,
    private dataService: DataService,
    private woo: WooService,
    private keyboard: Keyboard,
    private storage: Storage) {
    
      firebase.database().ref(`productList`).remove();
    this.platform.backButton.subscribe(() => {
      this.storage.get('verify').then(data => {
        if (data != null) {
          this.loggedIn = data;
        }
      });
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      }
      else if (this.router.url == "/") {
        navigator['app'].exitApp();
      } else if (this.router.url == "/home") {
        navigator['app'].exitApp();
      }
    })

    this.afauth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
        this.userid = user.uid;
        this.storage.set('userid', user.uid);
      }
      else {
        this.loggedIn = false;
      }
      this.storage.set('userIn', this.loggedIn)
    });
    this.initializeApp();
  }

  async ngOnInit() {
    this.woo.getPostCategories().subscribe(data => {
      this.postCategories = JSON.parse(JSON.stringify(data));
    });

    this.woo.getAsync("products/categories?parent=0&per_page=100").subscribe(data => {
      let info = JSON.parse(JSON.stringify(data));

      for (let item of info) {
        if (item.parent == 0 && item.slug != "uncategorized" && item.slug != "brandc") {
          this.categories.push(item);
        }
      }

    }, error => {
      console.error(error);
    })

    if (this.userid == null || this.userid == undefined || this.userid == '') {
      await this.storage.get('userid').then(id => {
        this.userid = id;
      });
    }
    await this.storage.get('userIn')
      .then(
        data => {
          if (data != null && data != undefined) {
            this.loggedIn = data;
          }
        },
        error => console.error(error)
      );
  }

  initializeApp() {
    this.menu.close();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.keyboard.hideFormAccessoryBar(true);
      this.statusBar.backgroundColorByHexString("#c0101e");
      this.splashScreen.hide();
      this.notificationSetup();
    });
  }
  async signout() {
    await this.fire.logout().then(() => {
      this.loggedIn = false;
      this.fire.presentToast('تم تسجيل الخروج بنجاح');
      this.storage.remove('userIn');
    });
  }

  openCategoryPage(category: any) {
    this.dataService.saveData(category);
    this.router.navigate(['products-by-category']);
  }

  openPostCategoryPage(category: any) {
    this.router.navigate(['posts-by-category', category.id, category.name]);
  }

  openPage(page: string) {
    this.router.navigate([`/${page}`]);
    this.menu.close();
  }

  private notificationSetup() {
    this.Fcm.subscribeToTopic('event');
    this.Fcm.onNotification().subscribe(
      (event) => {
        if (this.platform.is('ios')) {
          this.fire.presentToast(event.aps.alert);
        } else {
          this.fire.presentToast(event.body);
        }
      });
  }

  userAccount() {
    if (this.userid == null || this.userid == undefined || this.userid == '') {
      this.storage.get('userid').then(id => {
        this.userid = id;
      });
    }
    this.router.navigate(['account', this.userid]);
  }
}