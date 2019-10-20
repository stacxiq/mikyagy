import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-call-us',
  templateUrl: './call-us.page.html',
  styleUrls: ['./call-us.page.scss'],
})
export class CallUsPage {

  constructor(private router: Router,
    public platform: Platform,
    private appAvailability: AppAvailability,
    private inAppBrowser: InAppBrowser) { }

  callme(num: string) {
    let call = new CallNumber();
    call.callNumber(num, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }

  back() {
    this.router.navigate(['/home']);
  }

  openMail() {
    window.open('mailto:Info@mikyagy.com');
  }

  openUrl(app: string, name: string, fbUrl?: string) {
    switch (app) {
      case 'facebook':
        this.launchApp('fb://', 'com.facebook.katana', 'fb://facewebmodal/f?href=' + fbUrl, 'https://www.facebook.com/' + name);
        break;
      case 'instagram':
        this.launchApp('instagram://', 'com.instagram.android', 'instagram://user?username=' + name, 'https://www.instagram.com/' + name);
        break;
      case 'twitter':
        this.launchApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=' + name, 'https://twitter.com/' + name);
        break;
      default:
        break;
    }
  }

  private launchApp(iosApp: string, androidApp: string, appUrl: string, webUrl: string) {
    let app: string;
    // check if the platform is ios or android, else open the web url
    if (this.platform.is('ios')) {
      app = iosApp;
    } else if (this.platform.is('android')) {
      app = androidApp;
    } else {
      const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
      return;
    }
    this.appAvailability.check(app).then(
      () => {
        // success callback, the app exists and we can open it
        const browser: InAppBrowserObject = this.inAppBrowser.create(appUrl, '_system');
      },
      () => {
        // error callback, the app does not exist, open regular web url instead
        const browser: InAppBrowserObject = this.inAppBrowser.create(webUrl, '_system');
      }
    );
  }
}