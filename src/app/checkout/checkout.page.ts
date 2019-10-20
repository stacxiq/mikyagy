import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonContent, Events } from '@ionic/angular';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Products } from '../models/products';
import { DataService } from '../services/data.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  hide = false;
  products: Products[] = [];
  shippcost: number = 0;
  couponCode = "";
  copunCost = 0;
  @ViewChild('slides', { static: false }) slides: IonSlides;
  @ViewChild(IonContent, { static: false }) content: IonContent;
  cartItems: any[] = [];
  useAccountInfo = false;
  total: number = 0;
  constructor(private storage: Storage, public newOrder: Order, private router: Router,
    private fire: FirebaseService, private firestore: AngularFirestore, public events: Events,
    private data: DataService) { }


  ngOnInit() {

    this.storage.ready().then(() => {
      this.storage.get('cart').then((data) => {
        let info = JSON.parse(JSON.stringify(data));
        this.cartItems = data;
        console.log(JSON.parse(JSON.stringify(data)));
        // console.log(this.cartItems);
        let i = 0;
        let n = 0;
        this.cartItems.forEach(element => {
          let data: any = element;
          if (element.variation && element.product.categories[i]) {
            this.products.push({
              name: element.product.name,
              price: element.product.price,
              qty: element.qty,
              variations: element.variation.attributes[0].option ? element.variation.attributes[0].option : "",
              category: element.product.categories[i].option ? element.product.categories[i].name + 'option: ' + element.product.categories[i].option : element.product.categories[i].name,
              totalprice: element.product.price * element.qty
            });
          }
          else if (element.variation) {
            this.products.push({
              name: element.product.name,
              price: element.product.price,
              qty: element.qty,
              variations: element.variation.attributes[0].option ? element.variation.attributes[0].option : "",
              totalprice: element.product.price * element.qty
            });
          }
          else {
            this.products.push({
              name: element.product.name,
              price: element.product.price,
              qty: element.qty,
              totalprice: element.product.price * element.qty
            });
          }
          // console.log(data.variation );
          // if(data.variation.attributes != undefined || data.variation.attributes == null){
          //   console.log(element.variation.attributes[0].name + ' opt ' + element.variation.attributes[0].option);
          // }
          this.total = this.total + (element.product.price * element.qty);
          console.log(this.total);
          i++;
          // console.log(element.product.categories[i].option);
        });
      });
    });
  }

  move(from, to) {

    this.slides.lockSwipes(false);

    if (from == 1 && to == 2) {
      if (!this.newOrder.phone || this.newOrder.phone.length < 10) {
        this.fire.presentToast('رقم الهاتف مطلوب!');
        return;
      }

      if (!this.newOrder.firstname || !this.newOrder.lastname) {
        this.fire.presentToast('يرجى ملى المعلومات');
        return;
      }

      if (!this.newOrder.governorate || !this.newOrder.city
        || !this.newOrder.nearest_point) {
        this.fire.presentToast('يرجى ملئ معلومات العنوان');
        return;
      }
      if (!this.newOrder.phone2 || this.newOrder.phone2.length < 10) {
        this.newOrder.phone2 = '';
      }
      const date = new Date()
      const formatedDate = date.toISOString().substring(0, 10);
      const dateh = date.toISOString();
      console.log(formatedDate);
      this.newOrder.date = formatedDate;
      var d = new Date();
      var n = (d.getHours() - 12) + ':' + d.getMinutes();
      this.newOrder.datehours = n;

    }

    if (from > to) {
      this.slides.slidePrev();
    } else {
      this.slides.slideNext();
    }

    setTimeout(() => {
      this.content.scrollToTop(250);
      this.slides.lockSwipes(true);
    }, 250);
    this.newOrder.product = this.products;
  }

  applyCouponCode(couponCode: string) {
    this.fire.getRealTimeData('codeList', couponCode).subscribe((data) => {
      console.log(data[1]);
      if (data[1] == null || data[1] == undefined) {
        this.fire.presentToast('هذا الرمز غير صالح');
      } else {
        if (data[2] == "سعر ثابت") {
          this.total = this.total - Number(data[1]);
          this.newOrder.total = this.total;
          this.newOrder.couponCode = couponCode;
          this.newOrder.couponPrice = Number(data[1]);
          this.copunCost = Number(data[1]);
          this.hide = true;
        } else {
          this.total = this.total - (this.total * (Number(data[1]) / 100));
          this.newOrder.total = this.total;
          this.newOrder.couponCode = couponCode;
          this.newOrder.couponPrice = Number(data[1]);
          this.hide = true;
        }
      }
    });
  }

  placeOrder() {
    let id = this.firestore.createId();
    this.newOrder.id = id;
    this.newOrder.total = this.total + this.shippcost;
    console.log(this.newOrder);
    this.fire.addRealTimeData('orders', this.newOrder.id, this.newOrder);
    this.fire.presentToast('تم تثبيت طلبك بنجاح');
    this.storage.set('cart', null);
    this.events.publish("updateCart");
    this.router.navigate(['/home']);
  }

  back() {
    this.router.navigate(['/home']);
  }
  async ionViewWillEnter() {
    this.useAccountInfo = !this.useAccountInfo;
    if (this.useAccountInfo) {
      let userid;
      await this.storage.get('userid').then(id => {
        userid = id;
      });
      let userList: Observable<any> = this.fire.getRealTimeObject('users', userid);
      await userList.subscribe(info => {
        this.newOrder.firstname = info.firstname;
        this.newOrder.lastname = info.lastname;
        this.newOrder.phone = info.phone;
        this.newOrder.uid = info.id;
        this.newOrder.governorate = info.governorate;
        this.newOrder.city = info.city;
        this.newOrder.phone2 = info.phone2;
        this.newOrder.nearest_point = info.nearest_point;
        this.fire.getShoppingCost(info.governorate);
        this.data.costMessage.subscribe((data) => {
          console.log(data);
          this.shippcost = Number(data.toString());
        });
      });

    }


  }
  replyCouponCode() {
    console.log(this.copunCost);
    this.total = (this.total + this.copunCost);
    this.hide = false;
  }

  async getAccountData() {
    this.useAccountInfo = !this.useAccountInfo;
    if (this.useAccountInfo) {
      let userid;
      await this.storage.get('userid').then(id => {
        userid = id;
      });
      let userList: Observable<any> = this.fire.getRealTimeObject('users', userid);
      await userList.subscribe(info => {
        this.newOrder.firstname = info.firstname;
        this.newOrder.lastname = info.lastname;
        this.newOrder.phone = info.phone;
        this.newOrder.uid = info.id;
        this.newOrder.governorate = info.governorate;
        this.newOrder.city = info.city;
        this.newOrder.nearest_point = info.nearest_point;
      });
    } else {
      this.newOrder.firstname = null;
      this.newOrder.lastname = null;
      this.newOrder.phone = null;
      this.newOrder.id = null;
      this.newOrder.governorate = null;
      this.newOrder.city = null;
      this.newOrder.nearest_point = null;
    }
  }

}
