import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListingChildComponent } from './item-listing-child.component';

describe('ItemListingChildComponent', () => {
  let component: ItemListingChildComponent;
  let fixture: ComponentFixture<ItemListingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListingChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
