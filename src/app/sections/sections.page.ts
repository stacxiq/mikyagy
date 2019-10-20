import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import * as $ from 'jquery';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { ExtrasService } from '../extra.service';
@Component({
  selector: 'app-sections',
  templateUrl: './sections.page.html',
  styleUrls: ['./sections.page.scss'],
})
export class SectionsPage implements OnInit {

  sectionsList: Observable<any[]>;
  taskTemplates$: AngularFireList<any[]>;
  sectionsData: any;

  constructor(private router: Router,
              private firebaseService: FirebaseService,
              private extra: ExtrasService,
              private angularFire: AngularFireDatabase) { }

  ngOnInit() {
    this.sectionsList = this.firebaseService.getRealTimeDataCol('sectionList');
  }
  ionViewWillEnter(){
    this.sectionsList.subscribe(data => {
      $('.spinner').hide();
      if (data.length == 0) {
        $('#no-items-ava').show();
        $('#SHOW').hide();
      }
      else {
        $('#no-items-ava').hide();
        $('#SHOW').show();
        this.sectionsData = data.slice().reverse();
        console.log(this.sectionsData);
      }
    });
  }
 

  back() {
    this.router.navigate(['/home']);
  }

  openCategoryPage(section: any) {
    console.log(section.key);
    // this.router.navigate(['/category', brand]);
    this.taskTemplates$ = this.angularFire.list('productList');
    this.taskTemplates$.query.orderByChild('categorty').equalTo(section.name).on('value',(snap)=>{
      console.log(snap.val());
      this.extra.setExtras(snap.val());
    });
   
    this.router.navigate(['/products-by-category']);
//  console.log(this.taskTemplates$);
  }

}