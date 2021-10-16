import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  depName: string = '';
  departments: Department[] = [];
  depEdit: Department = null;

  private unsubscribe$: Subject<any> = new Subject();

  constructor(private DepartmentService: DepartmentService, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.DepartmentService.get()
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe((deps) => this.departments = deps)
  }

  save() {
    if (this.depEdit) {
      this.DepartmentService.update({name: this.depName, _id: this.depEdit._id})
        .subscribe(
          (dep) => {
            this.notify('Updated');
          },
          (err) => {
            this.notify('Error');
            console.error(err);
          }
        );
    } 
    else {
      this.DepartmentService.add({name: this.depName})
        .subscribe(
          (dep) => {
            this.clearFields();
            this.notify('Inserted');
            console.log(dep);   
          },
          (err) => {
            this.notify('ERROR');
            console.error(err);
          }
        );
    }
  }

  edit(dep: Department) {
    this.depName = dep.name;
    this.depEdit = dep;
  }

  delete(dep: Department){
    this.DepartmentService.del(dep)
    .subscribe(
      ()=> this.notify('Removed'),
      (err) => this.notify(err.error.msg)
    )
  }

  clearFields() {
    this.depName = '';
    this.depEdit = null;
  }

  cancel() {
    this.clearFields()
  }

  notify(msg: string) {
    this.snackBar.open(msg, 'OK', {duration: 3000});
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

}
