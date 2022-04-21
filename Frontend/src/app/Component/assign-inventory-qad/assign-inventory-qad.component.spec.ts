import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInventoryQadComponent } from './assign-inventory-qad.component';

describe('AssignInventoryQadComponent', () => {
  let component: AssignInventoryQadComponent;
  let fixture: ComponentFixture<AssignInventoryQadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignInventoryQadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInventoryQadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
