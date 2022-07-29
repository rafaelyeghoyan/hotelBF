import {Component, ElementRef, OnInit} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-fourlist',
  templateUrl: './fourlist.component.html',
  styleUrls: ['./fourlist.component.css']
})
export class FourlistComponent implements OnInit {
  aboutroom:any = [];
  titleRoom:any = [];
  roomPrice:any = [];
  roomAmet:any = [];
  constructor(public el: ElementRef , public request : RequestService) {
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getRoom();
    this.getRoomPrice();
    this.getRoomTitle();
    this.getRoomAmet();
    let arr = this.el.nativeElement.querySelectorAll('input.mat-input-element');
    arr.forEach((item:any) =>{
      item.value='May 30, 2022';
    });
  }
  getRoom(){
    this.request.getUrl(environment.londonRoomAmet).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.roomAmet.push(item);
      })
    })
  }
  getRoomAmet(){
    this.request.getUrl(environment.londonHotelRoom).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.aboutroom.push(item);
      })
    })
  }
  getRoomTitle(){
    this.request.getUrl(environment.londonHotelTitle).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.titleRoom.push(item);
      })
    })
  }
  getRoomPrice(){
    this.request.getUrl(environment.londonHotelPrice).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.roomPrice.push(item);
      })
    })
  }
}
