import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import * as $ from 'jquery'

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit, AfterViewInit {

  eventList: Observable<any[]>;
  eventData: any;

  constructor(public router: Router,
    private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.eventList = this.firebaseService.getRealTimeDataCol('notifyList');
  }

  ngAfterViewInit() {
    this.eventList.subscribe(data => {
      $('.spinner').hide();
      if (data.length == 0) {
        $('#no-items-ava').show();
        $('#SHOW').hide();
      }
      else {
        $('#no-items-ava').hide();
        $('#SHOW').show();
        this.eventData = data.slice().reverse();
      }
    });
  }

  back() {
    this.router.navigate(['/home']);
  }

}
