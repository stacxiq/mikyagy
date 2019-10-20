import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { WindowService } from '../services/window.service';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  isComplete = false;
  fromFacebook: any;
  phone: any;
  windowRef: any;
  verificationCode: string;
  check = false;

  constructor(public data: DataService,
    private user: User,
    private router: Router,
    private win: WindowService,
    private storage: Storage,
    private fire: FirebaseService,

    private routerParam: ActivatedRoute) {
    this.routerParam.params.subscribe(params => {
      this.fromFacebook = params['fromfacebook'];
    });
  }

  ngOnInit() {
    this.storage.set('verify', false);
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
    });
    this.windowRef.recaptchaVerifier.render();
    this.data.currentMessage.subscribe(data => {
      let info = JSON.parse(JSON.stringify(data));
      this.user.firstname = info.firstname;
      this.user.password = info.password;
      this.user.lastname = info.lastname;
      this.user.email = info.email;
      this.user.phone = info.phone;
      this.user.id = info.id;
      this.user.imgname = info.imgname;
    });

  }

  async sendcode() {
    this.storage.set('verify', false);
    this.user.phone = this.phone;
    const appVerifier = this.windowRef.recaptchaVerifier;
    await firebase.auth().signInWithPhoneNumber('+964' + this.user.phone, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
        this.check = true;
        this.fire.presentToast("تم ارسال رمز التحقيق");
      })
      .catch(error => {
        this.check = false;
        console.log(error)
        this.fire.presentToast(error);
      });
  }

  async verifyLoginCode() {
    this.storage.set('verify', false);
    await this.windowRef.confirmationResult
      .confirm(this.verificationCode)
      .then(result => {
        console.log(result.user);
        if (this.fromFacebook == "no") {
          this.fire.register(this.user).then((user) => {
            this.isComplete = true;
            this.storage.set('verify', true);
            this.fire.presentToast('تم التحقق من الهاتف بنجاح');
            this.back();
            console.log(user);
          }, (e) => {
            this.storage.set('verify', false);
            this.isComplete = false;
            console.log(e);
            this.fire.presentToast(e);
          });
        }
        else if (this.fromFacebook == "yes") {
          this.isComplete = true;
          this.fire.presentToast('تم التحقق من الهاتف بنجاح');
          this.storage.set('verify', true);
          this.user.password = null;
          this.user.imgname = null;
          this.fire.addRealTimeData('users', this.user.id, this.user);
          this.back();
        }
      })
      .catch(error => {
        this.storage.set('verify', false);
        console.log(error, "Incorrect code entered?");
        this.fire.presentToast(error);
      });
  }

  back() {
    if (!this.isComplete && (this.user.imgname != undefined || this.user.imgname != null)) {
      this.fire.deleteStorageFile('profiles', this.user.imgname);
    }
    else if (!this.isComplete) {
      this.storage.set('verify', false);
    }
    this.router.navigate(['/home']);
  }
}
