import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaCepValComponent } from './tabela-cep-val.component';

describe('TabelaCepValComponent', () => {
  let component: TabelaCepValComponent;
  let fixture: ComponentFixture<TabelaCepValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaCepValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaCepValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
