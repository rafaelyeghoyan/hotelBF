import {Component, ElementRef, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-list3',
  templateUrl: './list3.component.html',
  styleUrls: ['./list3.component.css']
})
export class List3Component implements OnInit {
  data_1: any = [];
  data_2: any = [];
  data_3: any = [];
  roomHotel: any = [];
  serviceHotel: any = [];

  constructor(public request: RequestService, public el: ElementRef) {

  }

  ngOnInit(): void {
    this.getImgUrl1();
    this.getImgUrl2();
    this.getImgUrl3();
    this.getRoomHotel();
    this.getServiceHotel();
    let arr = this.el.nativeElement.querySelectorAll('.date input.mat-input-element');
    arr.forEach((item: any) => {
      item.value = '18.05.2022';
    })
    window.scrollTo(0,0);
  }
  getRoomHotel(){
    this.request.getUrl(environment.roomHotel).subscribe((res:any)=>{
      res.forEach((item: any) => {
        this.roomHotel.push(item);
      })
    })
  }
  getServiceHotel(){
    this.request.getUrl(environment.serviceHotel).subscribe((res:any)=>{
      res.forEach((item: any) => {
        this.serviceHotel.push(item);
      })
    })
  }
  getImgUrl1() {
    this.request.getUrl(environment.hotel_list_3_calusel1_get_url).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.data_1.push(item);
      })
    })
  }

  getImgUrl2() {
    this.request.getUrl(environment.hotel_list_3_calusel2_get_url).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.data_2.push(item);
      })
    })
  }

  getImgUrl3() {
    this.request.getUrl(environment.hotel_list_3_calusel3_get_url).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.data_3.push(item);
      })
    })
  }

  next_1() {
    this.getImgUrl1();
    this.data_1.splice(0, 3);
  }

  next_2() {
    this.getImgUrl2();
    this.data_2.splice(0, 3);
  }

  next_3() {
    this.getImgUrl3();
    this.data_3.splice(0, 3);
  }

  prew_1() {
    this.getImgUrl1();
    this.data_1.splice(0, 6);
  }

  prew_2() {
    this.getImgUrl2();
    this.data_2.splice(0, 6);
  }

  prew_3() {
    this.getImgUrl3();
    this.data_3.splice(0, 6);
  }

}
