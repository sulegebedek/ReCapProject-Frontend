import { Component, OnInit } from '@angular/core';
import { RentalDetail } from "src/app/models/rentalDetail";
import { RentalService } from "src/app/services/rental.service";

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentalDetail[] = [];
  dataLoaded = false;
  subTitle:string = "";

  constructor(private rentalService:RentalService) { }
  
  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals = response.data;
    });
  }

  getFullName(rental:RentalDetail) {
    var fullname = [rental.firstName,rental.lastName].join(" ");
    return fullname;
  }

}
