import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
    providedIn: 'root'
})

export class Order {
    id: string;
    uid:string;
    firstname: string;
    lastname: string;
    phone: string;
    phone2: string;
    governorate: string;
    date: string;
    city: string;
    couponCode? : string;
    couponPrice? : number;
    product: Products[];
    nearest_point: string;
    total: number;
    datehours?: string;
}
