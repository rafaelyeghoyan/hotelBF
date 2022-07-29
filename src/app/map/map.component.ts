import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RequestService} from "../service/request.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() value: any;
  long: any = 43.845896891206635;
  lat: any = 40.792517518960985;
  marker: any = [];

  constructor(public request: RequestService) {
  }

  getmarkerCord() {
    this.request.getUrl(environment.mapMarker).subscribe((res: any) => {
      res.forEach((item: any) => {
        this.marker.push(item);
      })
    })
  }

  ngOnInit(): void {
    this.getmarkerCord();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.value) {
      this.long = this.value[0];
      this.lat = this.value[1];
    }
  }
}
