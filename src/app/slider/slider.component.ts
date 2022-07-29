import {Component, ElementRef, OnInit, Output} from '@angular/core';
import {RequestService} from "../service/request.service";
import {environment} from "../../environments/environment.prod";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public bathroomsList = [
    {
      img:"../../assets/caruselLogo3.png",
      title:'2 Bed'
    },
    {
      img:"../../assets/caruselLogo2.png",
      title:'50 sqm'
    },
    {
      img:"../../assets/caruselLogo4.png",
      title:'2 Bathroom'
    },
    {
      img:"../../assets/logoUserT.png",
      title:'4 Guest'
    },
    {
      img:"../../assets/Frame.png",
      title:'Room View'
    },
  ]
  constructor(public el:ElementRef) { }

  ngOnInit() {

  }
}
