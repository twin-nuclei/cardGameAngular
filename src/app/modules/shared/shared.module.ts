import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderByPipe } from './pipes/order-by.pipe';
import {Error404Component} from './components/error404/error404.component';



@NgModule({
  declarations: [
    OrderByPipe,
    Error404Component
  ],
  exports: [
    OrderByPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
