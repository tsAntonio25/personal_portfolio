import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkills } from './soft-skills';

describe('SoftSkills', () => {
  let component: SoftSkills;
  let fixture: ComponentFixture<SoftSkills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftSkills]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
