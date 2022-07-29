import {Injectable} from '@angular/core';
import {RequestService} from "../service/request.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MapserviceService {
  locArr: any = [];
  constructor(public request: RequestService) {
    this.request.getUrl(environment.homePageMap).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.locArr.push(item);
      })
    })
  }

  getIdLocation( id?: number) {
    let longitut = 0;
    let latitut = 0;
    for(let item of this.locArr){
      if(item.id == id){
       longitut = item.long;
       latitut =  item.lat;
      }
  }
    return [longitut,latitut];
  }
}
