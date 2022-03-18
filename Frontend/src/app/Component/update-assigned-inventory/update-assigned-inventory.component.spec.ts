import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAssignedInventoryComponent } from './update-assigned-inventory.component';

describe('UpdateAssignedInventoryComponent', () => {
  let component: UpdateAssignedInventoryComponent;
  let fixture: ComponentFixture<UpdateAssignedInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAssignedInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAssignedInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
