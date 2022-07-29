import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {RequestService} from "../../service/request.service";

@Component({
  selector: 'app-secoundlist',
  templateUrl: './secoundlist.component.html',
  styleUrls: ['./secoundlist.component.css']
})
export class SecoundlistComponent implements OnInit {

  hotelList2:any = [];

  constructor(public request:RequestService) { }

  ngOnInit(): void {
    this.hoteList2();
  }
  hoteList2(){
    this.request.getUrl(environment.hotelList2).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.hotelList2.push(item)
      })
    })
  }
}
