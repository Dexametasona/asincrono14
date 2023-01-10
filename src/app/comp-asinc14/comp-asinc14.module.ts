import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    MensajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormComponent,
    MensajeComponent
  ]
})
export class CompAsinc14Module { }
