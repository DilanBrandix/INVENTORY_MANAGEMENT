import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryInTimeComponent } from './inventory-in-time.component';

describe('InventoryInTimeComponent', () => {
  let component: InventoryInTimeComponent;
  let fixture: ComponentFixture<InventoryInTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryInTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryInTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
