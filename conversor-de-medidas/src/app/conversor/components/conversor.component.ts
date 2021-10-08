import { Component, OnInit, ViewChild } from '@angular/core';
import { Conversao, ConversaoResponse, Unidade } from '../models';
import { ConversaoService, UnidadeService } from '../services';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})

export class ConversorComponent implements OnInit {

  public unidades: Unidade[];
  public conversao: Conversao;
  public conversaoResponse: ConversaoResponse;
  public possuiErro: boolean
  public medidas: string[];

  @ViewChild('conversorForm', {static:true}) 
  conversorForm: NgForm

  constructor(private unidadeService: UnidadeService,
    private conversaoService: ConversaoService) { }

  ngOnInit(): void {
    this.medidas = this.unidadeService.getMedidas();
    this.init()
  }
  init():void{
    this.conversao = new Conversao(null, null, null, null);
    this.possuiErro = false;
  }

  onSelect(medida){
    console.log(medida)
    this.unidades = this.unidadeService.listarUnidade().filter((item)=>item.unidade == medida)
  }



  converter():void{
    this.conversaoService.converter(this.conversao).subscribe(
      response => {
        this.conversaoResponse = response;
        console.log(this.conversaoResponse.convertedValue)
      },
      error => this.possuiErro = true
    )
  }

}
