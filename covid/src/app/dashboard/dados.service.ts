import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Covid } from './models';

@Injectable()


export class DadosService {
  
  informaMes = [
    ['Junho', 0],
    ['Julho', 0],
    ['Agosto', 0],
    ['Setembro', 0]
  ]

  constructor() { }

  atualizarDados(covid: Covid): void {
    let mes = covid.mesArr[0]
    this.informaMes[mes][1] = covid.numeroDeCasos
  }

  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.informaMes)
      observable.complete()
    })
  }

}
