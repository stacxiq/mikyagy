import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {

  userid: any;
  userList: Observable<any>;
  userData: any;

  constructor(private router: Router, public user: User, private data: DataService, private firebaseService: FirebaseService, private routerParam: ActivatedRoute) {
    this.routerParam.params.subscribe(params => {
      this.userid = params['userid'];
    });
  }

  ngOnInit() {
    this.userList = this.firebaseService.getRealTimeObject('users', this.userid);
  }

  ngAfterViewInit() {
    this.userList.subscribe(info => {
      this.user.firstname = info.firstname;
      this.user.lastname = info.lastname;
      this.user.phone = info.phone;
      this.user.password = info.password;
      this.user.id = info.id;
      this.user.image = info.image;
      this.user.governorate = info.governorate;
      this.user.city = info.city;
      this.user.nearest_point = info.nearest_point;
    });
  }

  editAccount() {
    console.log(this.user);
    this.data.saveData(this.user);
    if (this.user.password == null && this.user.imgname == null)
      this.router.navigate(['user-edit', 'yes']);
    else {
      this.router.navigate(['user-edit', 'no']);
    }
  }

  back() {
    this.router.navigate(['/home']);
  }
}
