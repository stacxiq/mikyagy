
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service'
import { LoadingService } from '../services/loading.service';
import { FirebaseService } from '../services/firebase.service';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {

  imagecheck = false;
  show: boolean = false;
  mySelectedPhoto: any;
  constructor(public newUser: User,
    public data: DataService,
    private storage: Storage,

    private fireAuth: AngularFireAuth,
    private fire: FirebaseService,
    private loading: LoadingService,
    private router: Router) {


  }

  password() {
    this.show = !this.show;
  }

  signup(f: NgForm) {
    this.newUser.email = this.makeid(6) + Date.now().toString() + '@' + this.makeid(5) + '.com';
    if (this.newUser.image == null || this.newUser.image == undefined) {
      this.newUser.image = 'assets/imgs/logo.png';
      this.newUser.imgname = null;
    }
    else if (this.newUser.email == undefined || this.newUser.email == null) {
    }
    console.log(this.newUser);
    this.data.saveData(this.newUser);
    this.router.navigate(['/verify', 'no']);
  }

  back() {
    if (this.newUser.image && this.imagecheck)
      this.fire.deleteStorageFile('profiles', this.newUser.imgname);
    this.router.navigate(['/home']);
  }

  dataURLtoBlob(myURL) {
    let binary = atob(myURL.split(',')[1]);
    let array = [];
    for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
  }





  makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }




  onLoginError(err) {
    this.fire.presentToast("حصل خطا اثناء التسجيل!");
    console.log(err);
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