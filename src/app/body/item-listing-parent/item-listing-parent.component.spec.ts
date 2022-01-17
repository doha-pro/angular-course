import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListingParentComponent } from './item-listing-parent.component';

describe('ItemListingParentComponent', () => {
  let component: ItemListingParentComponent;
  let fixture: ComponentFixture<ItemListingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListingParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
