import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  brand: any;
  constructor(private router: Router, private routerParam: ActivatedRoute) {
    this.routerParam.params.subscribe(params => {
      this.brand = params['brand'];
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/brands']);
  }

  goToProduct(type: string) {
    this.router.navigate(['/products-by-category', this.brand,  type ]);
  }
}
