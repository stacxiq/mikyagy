import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { DataService } from '../services/data.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as $ from 'jquery'
import { WooService } from '../services/woo.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.page.html',
  styleUrls: ['./products-by-category.page.scss'],
})
export class ProductsByCategoryPage implements OnInit {

  products: any[] = [];
  subcategories: any[] = [];
  page: number;
  category: any;
  currency_symbol = "ع.د"

  constructor(private woo: WooService,
    private ngZone: NgZone,
    private dataService: DataService,
    private toastController: ToastController,
    private _sanitizer: DomSanitizer, private router: Router) {
    this.dataService.currentMessage.subscribe(data => {
      this.category = data;
    });

    this.page = 1;
  }

  ngOnInit() {
    this.woo.getAsync("products/categories?parent=" + this.category.id + "&per_page=100").subscribe(data => {
      this.ngZone.run(() => {
        this.subcategories = JSON.parse(JSON.stringify(data));
      })
    }, (err) => {
      console.log(err)
    });


    this.woo.getAsync("products?category=" + this.category.id).subscribe(data => {
      this.ngZone.run(() => {
        this.products = JSON.parse(JSON.stringify(data));
        console.log(this.products);
        $('.spinner').hide();
        if (this.products.length == 0) {
          $('#no-items-ava').show();
          $('#SHOW').hide();
        }
        else {
          $('#no-items-ava').hide();
          $('#SHOW').show();
        }
      })
    }, (err) => {
      console.log(err)
    });
  }

  loadMoreProducts(event) {
    this.page++;
    console.log("Getting page " + this.page);
    this.woo.getAsync("products?category=" + this.category.id + "&page=" + this.page).subscribe(data => {
      let temp = JSON.parse(JSON.stringify(data));

      this.products = this.products.concat(JSON.parse(JSON.stringify(data)))
      console.log(this.products);
      event.target.complete();

      if (temp.length < 10) {
        event.target.disabled = true;

        this.presentToast("لا توجد المزيد من المنتجات");
      }
    })
  }

  back() {
    this.router.navigate(['/home']);
  }

  openProductPage(product: any) {
    this.dataService.saveData(product);
    this.router.navigate(['/product-details']);
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 5000
    });
    await toast.present();
  }

  openCategoryPage(category: any) {
    this.dataService.saveData(category);
    this.woo.getAsync("products/categories?parent=" + category.id + "&per_page=100").subscribe(data => {
      this.ngZone.run(() => {
        this.subcategories = JSON.parse(JSON.stringify(data));
      })
    }, (err) => {
      console.log(err)
    });


    this.woo.getAsync("products?category=" + category.id).subscribe(data => {
      this.ngZone.run(() => {
        this.products = JSON.parse(JSON.stringify(data));
        console.log(this.products);
      })
    }, (err) => {
      console.log(err)
    });
  }
}