import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTehulaComponent } from './add-tehula.component';

describe('AddTehulaComponent', () => {
  let component: AddTehulaComponent;
  let fixture: ComponentFixture<AddTehulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTehulaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTehulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
