import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleServiceFormComponent } from './bottle-service-form.component';

describe('BottleServiceFormComponent', () => {
  let component: BottleServiceFormComponent;
  let fixture: ComponentFixture<BottleServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
