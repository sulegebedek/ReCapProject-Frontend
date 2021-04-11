import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDetail[] = [];
  dataLoaded=false;
  ApiUr= "https://localhost:44346/";

  constructor(private carDetailService : CarDetailService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        
        this.getCarsDetailsByBrandId(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsDetailsByColorId(params["colorId"])
      }
      else{
        this.getCarsDetails();
      }
    })
  }

  getCarsDetails(){
    this.carDetailService.getCarsDetails().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }

  getCarsDetailsByBrandId(brandId:number){
    this.carDetailService.getCarsDetailsByBrandId(brandId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }
  getCarsDetailsByColorId(colorId:number){
    this.carDetailService.getCarsDetailsByColorId(colorId).subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    });
  }



}
