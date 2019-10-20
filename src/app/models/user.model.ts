import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    image: string;
    imgname: string;  
    governorate:string;
    city:string;
    street:string;
    zoqaq:string;
    house:string;
    nearest_point:string;
}
