import { Professor } from './professor';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; 
import { HttpClient } from '@angular/common/http';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProfessorService {

  readonly url = 'http://localhost:3000/professores';

  private professorSubject$: BehaviorSubject<Professor[]> = new BehaviorSubject<Professor[]>(null);

  private loaded: boolean = false;

  constructor(private http: HttpClient) { }

  get(): Observable<Professor[]> {
    if(!this.loaded) {
      this.http.get<Professor[]>(this.url)
      .pipe(
        tap((profs) => console.log(profs)),
        delay(1000)
      )
      .subscribe(this.professorSubject$);
      
      this.loaded = true;
    }
    return this.professorSubject$.asObservable();
  }

  add(d: Professor): Observable<Professor> {
    return this.http.post<Professor>(this.url, d)
    .pipe(
      tap((prof: Professor) => this.professorSubject$.getValue().push(prof))
    )
  }

  del(prof: Professor): Observable<any>{
    return this.http.delete(`${this.url}/${prof._id}`)
    .pipe(
      tap(()=>{
        let Professors = this.professorSubject$.getValue();
        let i = Professors.findIndex(d => d._id === prof._id);
        if( i >= 0)
        Professors.splice(i, 1);
      })
    )
  }

  update(prof: Professor):Observable<Professor>{
    return this.http.patch<Professor>(`${this.url}/${prof._id}`, prof)
    .pipe(
      tap((d)=>{
        let Professors = this.professorSubject$.getValue();
        console.log(Professors);
        let i = Professors.findIndex(d=> d._id === prof._id);
        if( i>=0){
        Professors[i].name = d.name;
        Professors[i].materia = d.materia;

        }
      })
    )
  }
}


//tap causa uma ação no Observable