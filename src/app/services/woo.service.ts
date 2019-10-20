import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class WooService {

    store_url: string = "https://www.mikyiajacademy.com";
    consumer_key: string = "ck_47fdcd91937feb31499c6c540bb22cb4ba31f0e9";
    consumer_secret: string = "cs_d81c0028527e19add8ae434bd76f1c392b582421";

    access_key = `&consumer_key=${this.consumer_key}&consumer_secret=${this.consumer_secret}`;
    access_key2 = `consumer_key=${this.consumer_key}&consumer_secret=${this.consumer_secret}`;


    constructor(private http: HttpClient) { }

     getAsync(query: string){
        return  this.http.get(this.store_url + "/wp-json/wc/v2/" + query + this.access_key);
    }

    getReviews(query: string) {
        return this.http.get(this.store_url + "/wp-json/wc/v2/" + query + this.access_key2);
    }

    getPostCategories() {
        return  this.http.get(this.store_url + "/wp-json/wp/v2/categories?per_page=100" + this.access_key);
    }

     getPostsByCategory(categoryId: any) {
        return  this.http.get(this.store_url + "/wp-json/wp/v2/posts?categories=" + categoryId + "&per_page=100" + this.access_key);
    }
}