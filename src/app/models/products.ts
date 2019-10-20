import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Products {
id?:string;
name: string;
price: string;
qty : number;
brand?:string;
category?:string;
color?:string;
size?:string;
variations?:string;
totalprice: number;
}