import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading: any;

  constructor(public loadingController: LoadingController) { }

  async createLoading(msg: string) {
    this.loading = await this.loadingController.create({
      message: msg,
      spinner: 'circles',
    });
  }
  async dismiss() {
    await this.loading.dismiss();
  }

  async show() {
    await this.loading.present();
  }

}
