import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController, Events } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartItems: any[] = [];
  total: number;
  showEmptyCartMessage: boolean = false;
  currency_symbol: string = "د.ع";

  constructor(public toastController: ToastController, private storage: Storage, private router: Router, public events: Events) { }

  ngOnInit() {
    this.total = 0.0;
    this.storage.ready().then(() => {
      this.storage.get("cart").then((data) => {
        this.cartItems = data;
        console.log(this.cartItems);
        if (this.cartItems && this.cartItems.length > 0) {
          let i = 0;
          this.cartItems.forEach((item, index) => {

            if (!item.variation) {
              this.total = this.total + (item.product.price * item.qty);
              console.log(item.product.price * item.qty)
            }
            else {
              console.log(item.variation.attributes[i].name + ' opt ' + item.variation.attributes[i].option);
              this.total = this.total + (parseFloat(item.variation.price) * item.qty);
              console.log(parseFloat(item.variation.price) * item.qty)
            }
          })

        } else {
          this.showEmptyCartMessage = true;
        }
      }
      );
    });
  }

  back() {
    this.router.navigate(['/home']);
  }

  removeFromCart(item, i) {

    let price;
    if (!item.variation)
      price = item.product.price;
    else
      price = parseFloat(item.variation.price);
    let qty = item.qty;

    this.cartItems.splice(i, 1);

    this.storage.set("cart", this.cartItems).then(() => {
      this.total = this.total - (price * qty);

    });

    if (this.cartItems.length == 0) {
      this.showEmptyCartMessage = true;
    }

    this.events.publish("updateCart");
  }
  checkout() {
    this.storage.get("cart").then((data) => {
      this.cartItems = data;

      //FIX: Prevent checkout if cart is empty
      if (this.cartItems && this.cartItems.length > 0) {
        this.storage.get("userIn").then((data) => {
          if (data != null && data == true) {
            this.router.navigate(['/checkout']);
          } else {
            this.presentToast('يرجى تسجيل الدخول');
            this.router.navigate(['/signup']);
          }
        })
      } else {
        this.presentToast('السلة فارغة');
      }
    });
  }

  changeQty(item: any, index: number, change: number) {

    let price;

    if (!item.variation)
      price = item.product.price;
    else
      price = parseFloat(item.variation.price);

    let qty: number = item.qty;

    if (change < 0 && item.qty == 1) {
      return;
    }

    qty = qty + change;
    item.qty = qty;
    item.amount = qty * price;


    this.cartItems[index] = item;

    this.storage.set("cart", this.cartItems).then(() => {
      this.presentToast('تم تحديث السلة');
    });
    this.total = (parseFloat(this.total.toString()) + (parseFloat(price.toString()) * change));
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 1000
    });
    await toast.present();
  }

}
