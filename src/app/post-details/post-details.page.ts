import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {

  post: any = {};
  id: any;
  name: any;

  constructor(private router: Router, private data: DataService, private routerParam: ActivatedRoute) {
    this.routerParam.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(data => {
      let info = JSON.parse(JSON.stringify(data));
      console.log(info);
      this.post = info;
    });
  }

  back() {
    this.router.navigate(['/posts-by-category', this.id, this.name]);
  }
}
