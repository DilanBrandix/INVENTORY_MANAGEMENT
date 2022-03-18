import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignInventoryComponent } from './assign-inventory.component';

describe('AssignInventoryComponent', () => {
  let component: AssignInventoryComponent;
  let fixture: ComponentFixture<AssignInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
