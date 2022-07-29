import {Component, ElementRef, OnInit, Output} from '@angular/core';
import {RequestService} from 'src/app/service/request.service';
import {environment} from "../../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {MapserviceService} from "../../mapservice/mapservice.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerAddres: any = [];
  heaerLogo: any = [];
  headerManue: any = [];
  map: any = [];
  loc = new BehaviorSubject(0);
  id: number = 0;
  langlat: any;

  constructor(public request: RequestService, public el: ElementRef, public mapLoc: MapserviceService) {
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.getAddres();
    this.getLogo();
    this.getManu();
    this.getMap();
    this.loc.subscribe((num) => {
      this.id = num;
    });
    this.el.nativeElement.querySelector('form button[type="submit"]').addEventListener('click', () => {
     this.langlat =  this.mapLoc.getIdLocation(this.id);
    })

  }

  getManu() {
    this.request.getUrl(environment.headerManu).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.headerManue.push(item);
      })
    });
  }

  getLogo() {
    this.request.getUrl(environment.headerLogo).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.heaerLogo.push(item);
      })
    });

  }

  getMap() {
    this.request.getUrl(environment.homePageMap).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.map.push(item);
      })
    });
    this.mapLoc.getIdLocation(this.id);
  }

  openMap() {
    this.el.nativeElement.querySelector(".button").style.overflow = 'visible';
    this.el.nativeElement.querySelector(".button").addEventListener('dblclick', () => {
      this.el.nativeElement.querySelector('.button').style.overflow = 'hidden';
    })
  }

  closeMap(locaition: string, num: number) {
    this.el.nativeElement.querySelector('.anywere').innerText = `${locaition}`;
    this.el.nativeElement.querySelector('.button').style.overflow = 'hidden';
    this.loc.next(num);
  }

  getAddres() {
    this.request.getUrl(environment.headerAddress).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.headerAddres.push(item);
      })
    })
  }
}


