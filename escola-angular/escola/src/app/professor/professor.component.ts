import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfessorService } from './../professor.service';
import { Professor } from '../professor';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  professores: Professor[] = [];
  profName: string = '';
  profEdit: Professor = null;
  profMateria: string;

  private unsubscribe$: Subject<any> = new Subject();
  

  constructor(
    private professorService: ProfessorService,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.professorService.get()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((profs) => this.professores = profs);      
  }

  
  //MÉTODO PARA SALVAR INSERÇÃO DE DADO E/OU ALTERAÇÃO DE DADO  
  save() {
    if (this.profEdit && this.profName.length !== 0 && this.profMateria.length !== 0) {
      this.professorService.update(
        { name: this.profName, materia: this.profMateria, _id: this.profEdit._id })
        .subscribe(
          (prof) => {
            this.notify('Atualizado!');
          },
          (err) => {
            this.notify('Error');
            console.error(err);
          }
        )
    }
    else {
      if (this.profName.length == 0 || this.profMateria.length == 0) {
        this.cancel();
      }
      else {
        this.professorService.add({ name: this.profName, materia: this.profMateria })
          .subscribe(
            (prof) => {
              console.log(prof);

              this.notify('Inserido!');
            },
            (err) => console.error(err))
      }
      this.clearFields();
    }
  }

  //ALTERAR DADOS
  edit(prof: Professor) {
    this.profName = prof.name;
    this.profMateria = prof.materia;
    this.profEdit = prof;
  }

  //DELETAR DADOS
  delete(prof: Professor) {
    this.professorService.del(prof)
      .subscribe(
        () => this.notify("Deletado!"),
        (err) => this.notify(err.error.msg)
      )
  }

  //LIMPAR CAMPO
  clearFields() {
    this.profName = '';
    this.profMateria = '';
    this.profEdit = null;
  }

  //CANCELAR AÇÃO
  cancel() {
    this.clearFields();
  }

  //NOFICAÇÃO DE STATUS DA AÇÃO
  notify(msg: string) {
    this.snackbar.open(msg, 'Ok', { duration: 3000 });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
  }

}
