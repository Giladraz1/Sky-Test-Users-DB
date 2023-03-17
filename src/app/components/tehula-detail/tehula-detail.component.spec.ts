import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehulaDetailComponent } from './tehula-detail.component';

describe('TehulaDetailComponent', () => {
  let component: TehulaDetailComponent;
  let fixture: ComponentFixture<TehulaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TehulaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TehulaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
