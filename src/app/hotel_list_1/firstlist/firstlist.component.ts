import {Component, ElementRef, OnInit} from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment";
import {MapserviceService} from "../../mapservice/mapservice.service";

@Component({
  selector: 'app-firstlist',
  templateUrl: './firstlist.component.html',
  styleUrls: ['./firstlist.component.css']
})
export class FirstlistComponent implements OnInit {
  hotelList: any = [];

  constructor(public request: RequestService, public el: ElementRef) { }

  ngOnInit(): void {
    this.hoteList();
  }
  hoteList() {
    this.request.getUrl(environment.hotelList).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.hotelList.push(item)
      })
    })
  }


}


