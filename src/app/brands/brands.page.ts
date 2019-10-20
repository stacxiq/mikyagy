import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { BrandsProvider } from '../services/brands/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.page.html',
  styleUrls: ['./brands.page.scss'],
})
export class BrandsPage implements OnInit {

  brands: any[] = [];

  constructor(private router: Router,
    private brandsProvider: BrandsProvider,
    private dataService: DataService) { }

  ngOnInit() {
    this.brands = this.brandsProvider.getBrands();
    console.log(this.brands)
  }

  back() {
    this.router.navigate(['/home']);
  }

  openCategoryPage(brand, index) {
    brand.index = index;
    this.dataService.saveData(brand);
    this.router.navigate(['products-by-category']);
  }
}