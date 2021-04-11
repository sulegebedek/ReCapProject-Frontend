import { CarImage } from "./carImage";

export interface CarDetail {
  carId:number;
  carName:string;
  brandId:number;
  brandName:string;
  colorId:number;
  colorName:string;
  modelYear:number;
  dailyPrice:number;
  description:string;
  images: CarImage[];
  }
  