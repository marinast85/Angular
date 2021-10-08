import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversaoService, UnidadeService } from './services';
import { ConversorComponent } from './components';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalResultComponent } from './utils';



@NgModule({
  declarations: [
    ConversorComponent,
    ModalResultComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ConversorComponent
  ],
  providers:[
    ConversaoService,
    UnidadeService
  ]
})
export class ConversorModule { }
