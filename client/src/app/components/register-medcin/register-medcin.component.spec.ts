import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMedcinComponent } from './register-medcin.component';

describe('RegisterMedcinComponent', () => {
  let component: RegisterMedcinComponent;
  let fixture: ComponentFixture<RegisterMedcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMedcinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
