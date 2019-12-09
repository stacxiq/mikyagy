import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service'
import { FirebaseService } from '../services/firebase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
})
export class UserEditPage implements OnInit {

  face = false;
  fromFacebook: any;
  show: boolean = false;
  newEmail: string;
  newPassword: string;
  mySelectedPhoto: any;
  newPhoto: boolean = false;
  oldImageName: any;

  constructor(public user: User,
    public data: DataService,
    private fire: FirebaseService,
    private loading: LoadingService,
    private routerParam: ActivatedRoute,
    private router: Router) {
    this.routerParam.params.subscribe(params => {
      this.fromFacebook = params['fromfacebook'];
      this.user.governorate = 'بغداد';
    });
  }

  ngOnInit() {
    if (this.fromFacebook == "yes") {
      this.face = true;
    } else {
      this.face = false;
    }
    this.data.currentMessage.subscribe(data => {
      let info = JSON.parse(JSON.stringify(data));
      this.user.firstname = info.firstname;
      this.user.password = info.password;
      this.user.lastname = info.lastname;
      this.user.image = info.image;
      this.user.imgname = info.imgname;
      this.oldImageName = info.image;
      this.user.phone = info.phone;
      this.user.id = info.id;
      this.user.governorate = info.governorate;
      this.user.city = info.city;
      this.user.nearest_point = info.nearest_point;
    });

  }

  back() {
    this.router.navigate(['/account', this.user.id]);
  }

  signup(f: NgForm) {
    if (this.face) {
      this.user.password = null;
      this.user.imgname = null;
      this.fire.addRealTimeData('users', this.user.id, this.user);
      this.router.navigate(['account', this.user.id]);
    } else {
      if (this.user.imgname == undefined) {
        this.user.imgname = null;
      }
      if (this.newPhoto && this.oldImageName != null && this.oldImageName != undefined) {
        this.fire.deleteStorageFile('profiles', this.oldImageName);
      }


      this.fire.addRealTimeData('users', this.user.id, this.user);
      this.router.navigate(['home']);

    }
  }

}