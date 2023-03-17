import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tehula-detail',
  templateUrl: './tehula-detail.component.html',
  styleUrls: ['./tehula-detail.component.scss'],
})
export class TehulaDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.crudService.getTehula(this.getId).subscribe((res) => {
      this.updateForm.setValue({
        account: res['account'],
        username: res['username'],
        testEnvironment: res['testEnvironment'],
        description: res['description'],
      });
    });

    this.updateForm = this.formBuilder.group({
      account: [''],
      username: [''],
      testEnvironment: [''],
      description: [''],
    });
  }

  ngOnInit() {}

  onUpdate(): any {
    this.crudService.updateTehula(this.getId, this.updateForm.value).subscribe(
      () => {
        console.log('Data updated successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/tehulot-list'));
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
