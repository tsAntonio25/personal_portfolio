import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certs } from './certs';

describe('Certs', () => {
  let component: Certs;
  let fixture: ComponentFixture<Certs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
