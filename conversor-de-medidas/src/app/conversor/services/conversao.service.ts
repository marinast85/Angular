import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Conversao, ConversaoResponse } from '../models';

@Injectable()

export class ConversaoService {

  private readonly BASE_URL = "http://localhost:3001/"
  
  constructor(private http:HttpClient) { }

  //http://localhost:3001/unit/?from=USD&to=BRL&value=
  
  converter(conversao:Conversao):Observable<any>{
    let params = conversao.unidade + "/?from=" + conversao.from + "&to=" + conversao.to + "&value=" + conversao.valor;     
    console.log(params)
    return this.http.get(this.BASE_URL + params)
  }


}



