import { Component } from '@angular/core';
import { ToastController, ModalController, Events, LoadingController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ColorsProvider } from '../services/colors/colors';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { WooService } from '../services/woo.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage {
  options: any[] =[];
  product: any;
  reviews: any[] = [];
  att: any[] = [];
  selectedOptions: any = {};
  selectedVariation: any;
  productPrice: number = 0.0;
  productVariations: any[] = [];
  requireOptions: boolean = true;
  direction: string;
  currency_symbol: string;
  hasSpecs: boolean = false;
  counter = 0;
  colorMap: any = {}

  constructor(public router: Router, public dataService: DataService,
    public storage: Storage, public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public nav:NavController,
    private woo: WooService,
    public events: Events, public loadingCtrl: LoadingController,
    private colorsProvider: ColorsProvider,
    private _sanitizer: DomSanitizer) {


    this.colorMap = this.colorsProvider.getColorsMap()
    this.currency_symbol = "ع.د";
    let product: any;

    this.dataService.currentMessage.subscribe(data => {
      product = data;
    });
    // console.log(product.attributes[0]);
    if(product.attributes[0]){
      for(let i in product.attributes[0].options){
        // console.log(product.attributes[0].options[i]);
        this.options.push(product.attributes[0].options[i]);
      }
    }

    // console.log(this.options);
    product.attributes.forEach((attribute, i_index) => {

      if (attribute.variation == false) {
        this.hasSpecs = true;
      }

      attribute.options.forEach((option, j_index) => {
        product.attributes[i_index].options[j_index] = option.toLowerCase().replace(' ', '-').replace(' ', '-').replace('!', '');
      });

    })
    this.product = product;
    // console.log(this.product);
    if(this.product != undefined){
      this.woo.getAsync('products/' + this.product.id + '/variations?per_page=100').subscribe(data => {
        this.productVariations = JSON.parse(JSON.stringify(data));
        // console.log(this.productVariations)
        for (let i in this.productVariations){
          // console.log(this.productVariations[i].attributes[0].option);
        }
      })
    }

    //counting variation attributes options
    let count_ = 0;
    for (var index = 0; index < this.product.attributes.length; index++) {

      if (this.product.attributes[index].variation != undefined){
        count_++;
        // console.log(this.product.attributes[index].variation);
      }
        


    }
    if (count_ == 0) {
      this.requireOptions = false;
    }

    if (this.product.variations.length == 0) {
      this.productPrice = this.product.price;
    }
  }

  addToCart(product) {
    //counting selected attribute options
    let count = 0;
    for (let k in this.selectedOptions) if (this.selectedOptions.hasOwnProperty(k)) count++;

    //counting variation attributes options
    let count_ = 0;
    for (var index = 0; index < this.product.attributes.length; index++) {

      if (this.product.attributes[index].variation != undefined)
        count_++;
    }

    //checking if user selected all the variation options or not

    if (count_ != count || this.requireOptions) {
      this.presentToast("يرجى اختيار خصائص المنتج");
      return;
    }

    this.storage.get("cart").then((data: any) => {

      if (data == undefined || data.length == 0) {
        data = [];

        data.push({
          "product": product,
          "qty": 1,
          "amount": parseFloat(product.price)
        });
        if (this.selectedVariation) {
          data[0].variation = this.selectedVariation;
          data[0].amount = parseFloat(this.selectedVariation.price);
          this.productPrice = this.selectedVariation.price;
        }

      } else {
        // console.log(data);
        let alreadyAdded = false;
        let alreadyAddedIndex = -1;

        for (let i = 0; i < data.length; i++) {
          if (data[i].product.id == product.id) { //Product ID matched
            if (this.productVariations.length > 0 && data[i].variation != undefined) { //Now match variation ID also if it exists
              if (data[i].variation.id == this.selectedVariation.id) {
                alreadyAdded = true;
                alreadyAddedIndex = i;
                break;
              }
            } else { //product is simple product so variation does not  matter
              alreadyAdded = true;
              alreadyAddedIndex = i;
              break;
            }
          }
        }

        if (alreadyAdded == true) {
          if (this.selectedVariation) {
            data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
            data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(this.selectedVariation.price);
            data[alreadyAddedIndex].variation = this.selectedVariation;
          } else {
            data[alreadyAddedIndex].qty = parseFloat(data[alreadyAddedIndex].qty) + 1;
            data[alreadyAddedIndex].amount = parseFloat(data[alreadyAddedIndex].amount) + parseFloat(data[alreadyAddedIndex].product.price);
          }
        } else {
          if (this.selectedVariation) {
            data.push({
              product: product,
              qty: 1,
              amount: parseFloat(this.selectedVariation.price),
              variation: this.selectedVariation
            });
          } else {
            data.push({
              product: product,
              qty: 1,
              amount: parseFloat(product.price)
            });

          }
        }

      }

      this.storage.set("cart", data).then(() => {
        // console.log("Cart Updated");
        // console.log(data);

        this.events.publish("updateCart");

        this.presentToast("تم تحديث السلة");
      })
    })

  }

  openCart() {
    this.router.navigate(['/cart']);
  }

  async check(justSelectedAttribute, option?) {
    // console.log(justSelectedAttribute, option)
    console.log(option)
    if (option) {
      this.selectedOptions[justSelectedAttribute] = option
    }
    if(option){
      this.print(option);
    }

    //counting selected attribute options
    let count = 0;
    for (let k in this.selectedOptions) if (this.selectedOptions.hasOwnProperty(k)) count++;

    //counting variation attributes options
    let count_ = 0;
    for (var index = 0; index < this.product.attributes.length; index++) {

      if (this.product.attributes[index].variation)
        count_++;

    }

    //checking if user selected all the variation options or not

    if (count_ != count) {
      this.requireOptions = true;
      return;
    } else {
      this.requireOptions = false;

      //Get product variations only once when all product variables are selected by the user

    }

    let i = 0, matchFailed = true;

    if (this.productVariations.length > 0) {
      for (i = 0; i < this.productVariations.length; i++) {

        matchFailed = false;
        let key = "";
        for (let j = 0; j < this.productVariations[i].attributes.length; j++) {
          key = this.productVariations[i].attributes[j].name;

          //temporary fix
          if (key.indexOf(' ') > -1) {
            key = decodeURIComponent(encodeURIComponent(key).replace("%20", "-"))
          }

          // console.log(key, this.selectedOptions)

          ////

          // console.log(this.selectedOptions[key].toLowerCase() + " " + this.productVariations[i].attributes[j].option.toLowerCase())
          
          if (this.selectedOptions[key] != undefined && this.selectedOptions[key].toLowerCase() == this.productVariations[i].attributes[j].option.toLowerCase()) {
            //Do nothing
          } else {
            // console.log(matchFailed)
            matchFailed = true;
            break;
          }

        }
        //console.log(matchFailed)
        if (matchFailed) {
          continue;
          this.productPrice = this.productVariations[i].price;
          this.selectedVariation = this.productVariations[i];
          // console.log(this.selectedVariation)
        } else {
          //found the matching variation
          //console.log(productVariations[i])
          this.productPrice = this.productVariations[i].price;
          this.selectedVariation = this.productVariations[i];
          // console.log(this.selectedVariation)

          break;

        }
      }

      // if (matchFailed == false) {
      //   this.presentToast("لم يتم ايجاد المنتج").then(() => {
      //     this.requireOptions = true;
      //   });
      // }

    } else {
      this.productPrice = this.product.price;
    }
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

  back() {
    this.nav.pop();
  }


  async presentToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000
    });
    await toast.present();
  }
  // print(option){
  //   console.log('hh');
  //   console.log(option);
  // }
  

  print(option){
    console.log(option);
   console.log('option' + option.toString().replace(/-/gi,' '));
    console.log(  this.productVariations);
    for(let i in this.productVariations){
      console.log(this.productVariations[i].attributes[0].option.toLowerCase());
      if( option.toString().includes('-') && this.productVariations[i].attributes[0].option.toLowerCase() == option.toString().replace(/-/gi,' ')){
        console.log('i found it');
        this.productPrice = this.productVariations[i].price;
        this.selectedVariation = this.productVariations[i];
      } else{
        console.log('i found it');
        this.productPrice = this.productVariations[i].price;
      }
    }
    for(let i in this.options){

      if(option == this.options[i]){
      
      }
     
    }
    
  }
}
