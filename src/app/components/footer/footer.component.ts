import { Component, OnInit } from '@angular/core';
import {RequestService} from "../../service/request.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
    list1:any = [];
    list2:any = [];
    logo:any = [];
    address:any = [];
  constructor(public request:RequestService) { }

  ngOnInit(): void {
    this.getList1();
    this.getList2();
    this.getLogo();
    this.getAddress();
  }
    getList1 (){
    this.request.getUrl(environment.footerList1).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.list1.push(item)
      })
    })
    }
    getAddress() {
    this.request.getUrl(environment.footerAddress).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.address.push(item)
      })
    })
    }
    getLogo (){
    this.request.getUrl(environment.footerLogo).subscribe((res:any)=>{
      res.forEach((item:any)=>{
        this.logo.push(item)
      })
    })
    }
    getList2 (){
      this.request.getUrl(environment.footerList2).subscribe((res:any)=>{
        res.forEach((item:any)=>{
          this.list2.push(item)
        })
      })
    }
}
