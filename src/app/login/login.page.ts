import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { LoadingService } from '../services/loading.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  show: boolean = false;

  constructor(private fire: FirebaseService,
    public newUser: User,
    private storage: Storage,
  
    private fireAuth: AngularFireAuth,
    private loader: LoadingService,
    private data: DataService,
    private router: Router) { }

  password() {
    this.show = !this.show;
  }

  signIn(f: NgForm) {
    console.dir(f);
    this.loader.createLoading("الرجاء الانتظار").then(res => {
      this.loader.show();
    });
    this.fire.login(f.value.email, f.value.password).then(data => {
      this.storage.set('userid', data.user.uid);
      this.loader.dismiss();
      this.fire.presentToast("تم تسجيل الدخول بنجاح");
      this.back();
    }, (err) => {
      this.loader.dismiss();
      if (err.message == "The password is invalid or the user does not have a password.") {
        this.fire.presentToast("كلمة مرور غير صحيحة")
      }

      if (err.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
        this.fire.presentToast("بريد الكتروني غير موجود")
      }

      if (err.message == "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
        this.fire.presentToast("يرجى التحقق من الاتصال بلشبكة")
      }
    });
    f.resetForm();
  }
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
  // logginFacebook() {
  //   this.fb.login(['email'])
  //     .then((response: FacebookLoginResponse) => {
  //       this.onLoginSuccess(response);
  //       console.log(response.authResponse.accessToken);
  //     }).catch((error) => {
  //       console.log(error)
  //       this.onLoginError(error);
  //     });
  // }

  // async onLoginSuccess(res: FacebookLoginResponse) {
  //   const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
  //   await this.fireAuth.auth.signInWithCredential(credential)
  //     .then((response) => {
  //       let info = JSON.parse(JSON.stringify(response));
  //       this.storage.set('userid', info.user.id);
  //       this.checkAccount(info);
  //     })
  // }

  onLoginError(err) {
    this.fire.presentToast("حصل خطا اثناء التسجيل!");
    console.log(err);
  }

  back() {
    this.router.navigate(['/home']);
  }

  async checkAccount(info) {
    if (info.user.uid) {
      let user = await this.fire.getRealTimeData('users', info.user.uid);
      await user.subscribe(data => {
        if (data.length == 0 && data != null && data != undefined) {
          // user data from facebook
          this.newUser.id = info.user.uid;
          this.newUser.firstname = info.additionalUserInfo.profile.first_name;
          this.newUser.lastname = info.additionalUserInfo.profile.last_name;
          this.newUser.email = info.user.email;
          this.newUser.phone = info.user.phoneNumber;
          this.newUser.image = info.user.photoURL + '?type=large&width=720&height=720';
          this.fire.presentToast("يرجى تاكيد رقم الهاتف");
          this.data.saveData(this.newUser);
          this.router.navigate(['/verify', 'yes']);
        }
        else {
          this.fire.presentToast("تم تسجيل الدخول بنجاح");
          this.back();
        }
      });
    } else {
      this.fire.presentToast("حصل خطا اثناء مزامنة البيانات");
    }
  }
}
