import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstlistComponent } from './hotel_list_1/firstlist/firstlist.component';
import { SecoundlistComponent } from './hotel_list_2/secoundlist/secoundlist.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { RouterModule, Routes } from "@angular/router";
import { List3Component } from './hotel_list_3/list3/list3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MaterialModule } from "../material.module";
import { CheckoutComponent } from './checkout/checkout.component';
import { SliderComponent } from './slider/slider.component';
import { HttpClientModule } from "@angular/common/http";
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule} from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FourlistComponent } from './hotel_list_4/fourlist/fourlist.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {AgmCoreModule} from "@agm/core";
import { MapComponent } from './map/map.component';


const router: Routes = [
  {
    path: '',
    component: FirstlistComponent
  },
  {
    path: 'home',
    component: FirstlistComponent
  },
  {
    path: 'home/1',
    component: SecoundlistComponent
  },
  {
    path: 'rooms',
    component: List3Component
  },
  {
    path: 'admin',
    component: NavigationComponent
  },
  {
    path: 'room/1',
    component: FourlistComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstlistComponent,
    SecoundlistComponent,
    List3Component,
    DatePickerComponent,
    CheckoutComponent,
    SliderComponent,
    NavigationComponent,
    DashboardComponent,
    FourlistComponent,
    NotfoundComponent,
    MapComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    FormsModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey:""
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
