import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private dataSource = new BehaviorSubject('default message');
    currentMessage = this.dataSource.asObservable();
    private costSource = new BehaviorSubject('default message');
    costMessage = this.costSource.asObservable();
    private cartNumber = new BehaviorSubject(0);
    cartNumberM = this.cartNumber.asObservable();
    constructor() { }

    saveData(data) {
        this.dataSource.next(data);
    }
    saveCost(data){
        this.costSource.next(data);
    }
    IncreaseCartNumber(count = 0 ){
        this.cartNumber.next(count);
    }
}