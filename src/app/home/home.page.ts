import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import { WooService } from '../services/woo.service';
import { Storage } from '@ionic/storage';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 1,
    autoplay: true
  };

  slideOpts2 = {
    initialSlide: 1,
    speed: 400,
    slidesPerView: 2,
    autoplay: true
  };

  fireImages = false;
  featuredProducts: any[] = [];
  discountProducts: any[] = [];
  images: any[] = [];
  cart_count: number = 0;
  currency_symbol = "د.ع"

  constructor(private woo: WooService,
    private data: DataService,
    public events: Events,
    public storage: Storage,
    private _sanitizer: DomSanitizer,
    private firebaseService: FirebaseService, private router: Router) {
    this.events.subscribe("updateCart", () => {
      this.updateCart();
    });
  }

  ngOnInit() {
    this.getSlideImages();
    this.getfeatured();
    this.getdiscount();
    this.updateCart();
  }


  getSlideImages() {
    let slideList: Observable<any[]>;
    slideList = this.firebaseService.getRealTimeDataCol('slideList');
    slideList.subscribe(data => {
      if (data.length > 0) {
        this.fireImages = true;
        this.images = data.slice().reverse();
      }
      else {
        this.fireImages = false;
        this.images.push("https://mikyiajacademy.com/wp-content/uploads/2018/01/PHYTO_-_Ambiance_17_-1170x610.jpg");
        this.images.push("https://mikyiajacademy.com/wp-content/uploads/2018/01/marval-1.jpg");
        this.images.push("https://mikyiajacademy.com/wp-content/uploads/2018/01/liraq-1170x583.jpg");
      }
    });
  }

  getfeatured() {
    this.woo.getAsync("products?featured=true").subscribe((data) => {
      this.featuredProducts = JSON.parse(JSON.stringify(data));
    });
  }

  getdiscount() {
    this.woo.getAsync("products?on_sale=true").subscribe((data) => {
      this.discountProducts = JSON.parse(JSON.stringify(data));
    });
  }

  gotoCart() {
    this.router.navigate(['/cart']);
  }

  openProductPage(product) {
    this.data.saveData(product);
    this.router.navigate(['/product-details']);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  updateCart() {
    this.storage.ready().then(() => {
      this.storage.get("cart").then((data) => {
        console.log(data);
        let cartItems = data;

        if (cartItems && cartItems.length > 0) {

          this.cart_count = cartItems.length

        } else {

          this.cart_count = 0;

        }
      })
    })
  }
}
