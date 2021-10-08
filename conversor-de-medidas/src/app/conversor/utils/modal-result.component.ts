import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversaoService } from '../services';
import { ConversaoResponse, Conversao } from '../models';

@Component({
  selector: 'app-modal-result',
  templateUrl: './modal-result.component.html',
  styleUrls: ['./modal-result.component.css']
})
export class ModalResultComponent implements OnInit {

  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversaoService) { }

  ngOnInit(): void {
  }

  novaConsulta() {
    this.onConfirm.emit();
  }

  get valorConvertido(): number{
    if (this.conversaoResponse === undefined) {
      return 0;
    }
    return this.conversaoResponse.convertedValue
  }
  get unitFrom(): string{
    if (this.conversaoResponse === undefined){
      return "0";
    }
    return this.conversaoResponse.unitFrom
  }
  get unitTo(): string{
    if (this.conversaoResponse === undefined){
      return "0";
    }
    return this.conversaoResponse.unitTo
  }

}
