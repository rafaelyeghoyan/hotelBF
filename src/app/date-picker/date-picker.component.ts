import {Component, OnInit} from '@angular/core';
import {RequestService} from "../service/request.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  constructor(public request: RequestService) {
  }

  ngOnInit(): void {

  }

  getValue(date: any) {

  }
}
