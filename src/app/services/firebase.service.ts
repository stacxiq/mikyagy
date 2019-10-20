
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user.model';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  APP_NAME = 'Mikyage';
  user: User;
  Band: boolean = false;


  constructor(private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private store: Storage,
    private data: DataService,
    public toastController: ToastController) { }

  addRealTimeData(colName: string, path: string, dataObject: any) {
    this.db.list(`${colName}/`).set(`${path}`, Object.assign({}, dataObject));
  }
  pushRealTimeData(colName: string, dataObject: any) {
    this.db.list(`${colName}/`).push(Object.assign({}, dataObject));
  }
  deleteRealTimeData(colName: string, path: string) {
    this.db.list(`${colName}/`).remove(`${path}`);
  }

  getRealTimeData(colName: string, path: string) {
    return this.db.list(`${colName}/${path}`).valueChanges();
  }
  getRealTimeObject(colName: string, path: string) {
    return this.db.object(`${colName}/${path}`).valueChanges();
  }

  getRealTimeDataCol(colName: string) {
    return this.db.list(`${colName}`).valueChanges();
  }

  async login(email: string, password: string) {
    return await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  async register(user: User) {
    return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(() => {
      user.id = this.afAuth.auth.currentUser.uid;
      this.addRealTimeData('users', `${this.afAuth.auth.currentUser.uid}`, user);
    }).then((user) => {
      console.log(user);
      this.storeVal('userProfile', user);
    });
  }
  async getUser() {
    await this.afAuth.auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        return await user;
      } else {
        console.log('user not logged');
        return;
      }
    });
  }
  async updateStuEmailPassword(email: string, password: string, newEmail: string, newPassword: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      userCredential.user.updateEmail(newEmail);
      userCredential.user.updatePassword(newPassword);
    });
  }
  async logout() {
    await this.afAuth.auth.signOut();
  }
  async storeVal(key: string, val) {
    await this.store.set(key, val);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000
    });
    await toast.present();
  }

  deleteStorageFile(folder: string, filename: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${folder}/${filename}`).delete();
  }
  async checkBlacklist() {
    return await this.db.list(`blacklist`).valueChanges();
  }
  setIsBand(m: boolean) {
    this.Band = m;
  }
  getBand(): boolean {
    return this.Band;
  }
  getShoppingCost(city) {
    let cost: number;
    let shippingcity: Observable<any> = this.getRealTimeDataCol('shippingList')
    shippingcity.subscribe((data) => {
      data.forEach(element => {
        if (element.name == city) {
          console.log(element.cost);
          this.data.saveCost(element.cost);
        }
      });
    });

  }
}