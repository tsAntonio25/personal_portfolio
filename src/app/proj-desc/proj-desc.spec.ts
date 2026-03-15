import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDesc } from './proj-desc';

describe('ProjDesc', () => {
  let component: ProjDesc;
  let fixture: ComponentFixture<ProjDesc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjDesc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjDesc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
