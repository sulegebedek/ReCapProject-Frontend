import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  currentBrand:Brand;
  prevBrand:Brand;
  datLoaded = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
      this.datLoaded = true;
    });
  }
  setCurrentBrand(brand:Brand){
    this.prevBrand=this.currentBrand;
    this.currentBrand=brand;
  }
  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "active-in";
    }else{
      return this.prevBrand==brand? "active-out":" ";
    }
  }

}
