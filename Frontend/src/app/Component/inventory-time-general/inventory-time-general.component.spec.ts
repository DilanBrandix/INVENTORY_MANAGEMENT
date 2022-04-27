import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTimeGeneralComponent } from './inventory-time-general.component';

describe('InventoryTimeGeneralComponent', () => {
  let component: InventoryTimeGeneralComponent;
  let fixture: ComponentFixture<InventoryTimeGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryTimeGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTimeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
