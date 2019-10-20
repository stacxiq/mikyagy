import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Product {
    id:string;
    title:string;
    description:string;
    brand:string;
    image:string[]=[];
    imgname:string[]=[];
    categorty:string;
    colors:string;
    size?:string;
    price:number;
    onSale:number;
    discount:number;
    Special:string;
    Best_seller:number;
}
