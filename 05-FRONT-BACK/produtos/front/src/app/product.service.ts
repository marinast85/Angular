import { Product } from './product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  readonly url = 'http://localhost:3000/product';

  private productSubject$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(null);
  private loaded: boolean = false;
  constructor( private http: HttpClient) { }

  //faz a consulta/busca na api
  get(): Observable<Product[]>{
    if(!this.loaded){
      this.http.get<Product[]>(this.url)
      .pipe(
        tap((deps)=> console.log(deps)),
        delay(1000)
      )
      .subscribe(this.productSubject$);
      this.loaded = true;
    }
    return this.productSubject$.asObservable();
  }

  add(d : Product): Observable<Product>{
    return this.http.post<Product>(this.url, d)
    .pipe(
      tap((dep: Product)=> this.productSubject$.getValue().push(dep))
    )
  }

  del(dep: Product): Observable<any>{
    return this.http.delete(`${this.url}/${dep._id}`)
    .pipe(
      tap(()=>{
        let product = this.productSubject$.getValue();
        let i = product.findIndex(d => d._id === dep._id);
        if(i >= 0){
          product.splice(i, 1);
        }
      })
    )
  };


  update(dep: Product): Observable<Product>{
    return this.http.patch<Product>(`${this.url}/${dep._id}`, dep)
    .pipe(
      tap((d)=>{
      let product = this.productSubject$.getValue();
      let i = product.findIndex(d => d._id === dep._id);
      if(i >= 0){
        product[i].name = d.name;
        }
      })
    )
  };

}
