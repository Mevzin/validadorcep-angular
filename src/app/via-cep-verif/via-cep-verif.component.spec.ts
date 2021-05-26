import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaCepVerifComponent } from './via-cep-verif.component';

describe('ViaCepVerifComponent', () => {
  let component: ViaCepVerifComponent;
  let fixture: ComponentFixture<ViaCepVerifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViaCepVerifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViaCepVerifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
