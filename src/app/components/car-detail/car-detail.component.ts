import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarDetailService } from 'src/app/services/car-detail.service';


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: CarDetail[] = [];
  carImg: CarImage[] = [];
  dataLoaded=false;
  CurrentImgId:number;

  ApiUr= "https://localhost:44346/";

  constructor(private carDtoService : CarDetailService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarsDetailsByCarId(params["carId"])
      }
    })
  }

  getCarsDetailsByCarId(carId:number){
    this.carDtoService.getCarsDetailsByCarId(carId).subscribe(response=>{
      this.car=response.data;
      this.carImg=this.car[0].images.splice(1);
      this.CurrentImgId=this.carImg[0].id;
      this.dataLoaded=true;
    });
  }

  prevBtn(){
    let countCarImg=this.carImg.length-1;
    let currentImgIndexNum:number=0;
    let currentImgId:number=this.CurrentImgId;

    this.carImg.forEach(function (img, i) {
      if(img.id==currentImgId){
        if(i-1>=0){
          currentImgIndexNum=i-1;
        }else{
          currentImgIndexNum=countCarImg;
        }
      }
    });
    
    this.CurrentImgId=this.carImg[currentImgIndexNum].id;
  }
  nextBtn(){
    let countCarImg=this.carImg.length-1;
    let currentImgIndexNum:number=0;
    let currentImgId:number=this.CurrentImgId;

    this.carImg.forEach(function (img, i) {
      if(img.id==currentImgId){
        if(i+1<=countCarImg){
          currentImgIndexNum=i+1;
        }else{
          currentImgIndexNum=0;
        }
      }
    });
    
    this.CurrentImgId=this.carImg[currentImgIndexNum].id;
  }

  setCurrentImg(imgId:number){
    this.CurrentImgId=imgId;
  }
  getCurrentCarouselmenuClass(imgId:number){
    if(this.CurrentImgId==imgId){
      return "carousel-menu active";
    }else{ 
      return "carousel-menu";
    }
  }

  getCurrentCarouselClass(imgId:number){
    if(this.CurrentImgId==imgId){
      return "carousel-item active";
    }else{ 
      return "carousel-item";
    }
  }

}
