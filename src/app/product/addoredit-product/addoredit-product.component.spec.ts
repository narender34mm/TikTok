import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoreditProductComponent } from './addoredit-product.component';

describe('AddoreditProductComponent', () => {
  let component: AddoreditProductComponent;
  let fixture: ComponentFixture<AddoreditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddoreditProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddoreditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
