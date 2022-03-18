import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOutTimeComponent } from './inventory-out-time.component';

describe('InventoryOutTimeComponent', () => {
  let component: InventoryOutTimeComponent;
  let fixture: ComponentFixture<InventoryOutTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryOutTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryOutTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
