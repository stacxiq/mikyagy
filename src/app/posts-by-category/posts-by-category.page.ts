import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery'
import { DataService } from '../services/data.service';
import { WooService } from '../services/woo.service';

@Component({
  selector: 'app-posts-by-category',
  templateUrl: './posts-by-category.page.html',
  styleUrls: ['./posts-by-category.page.scss'],
})
export class PostsByCategoryPage implements OnInit {

  id: any;
  name: any;
  posts: any[] = [];

  constructor(private data: DataService, private woo: WooService, private router: Router, private routerParam: ActivatedRoute) {
    this.routerParam.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }

  ngOnInit() {
    this.woo.getPostsByCategory(this.id).subscribe(data => {
      $('.spinner').hide();
      if (data == null || data == undefined) {
        $('#no-items-ava').show();
        $('#SHOW').hide();
      }
      else {
        $('#no-items-ava').hide();
        $('#SHOW').show();
      }
      this.posts = JSON.parse(JSON.stringify(data));
    });
  }

  back() {
    this.router.navigate(['/home']);
  }

  openPostDetailPage(post: any) {
    this.data.saveData(post);
    this.router.navigate(['/post-details', this.id, this.name]);
  }
}
