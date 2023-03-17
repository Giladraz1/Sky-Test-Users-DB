import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehulotListComponent } from './tehulot-list.component';

describe('TehulotListComponent', () => {
  let component: TehulotListComponent;
  let fixture: ComponentFixture<TehulotListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TehulotListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TehulotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
