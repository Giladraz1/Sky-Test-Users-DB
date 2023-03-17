import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-tehula',
  templateUrl: './add-tehula.component.html',
  styleUrls: ['./add-tehula.component.scss'],
})
export class AddTehulaComponent implements OnInit {
  tehulaForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.tehulaForm = this.formBuilder.group({
      account: [''],
      username: [''],
      testEnvironment: [''],
      description: [''],
    });
  }

  ngOnInit() {}

  onSubmit(): any {
    this.crudService.addTehula(this.tehulaForm.value).subscribe(
      () => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/tehulot-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
