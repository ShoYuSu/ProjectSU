import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlans } from './add-plans';

describe('AddPlans', () => {
  let component: AddPlans;
  let fixture: ComponentFixture<AddPlans>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlans],
    }).compileComponents();

    fixture = TestBed.createComponent(AddPlans);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
