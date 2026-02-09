import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducExp } from './educ-exp';

describe('EducExp', () => {
  let component: EducExp;
  let fixture: ComponentFixture<EducExp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducExp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducExp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
