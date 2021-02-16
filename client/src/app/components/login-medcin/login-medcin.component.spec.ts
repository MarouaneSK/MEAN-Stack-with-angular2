import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMedcinComponent } from './login-medcin.component';

describe('LoginMedcinComponent', () => {
  let component: LoginMedcinComponent;
  let fixture: ComponentFixture<LoginMedcinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMedcinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMedcinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
