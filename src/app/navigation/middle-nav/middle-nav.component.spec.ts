import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleNavComponent } from './middle-nav.component';

describe('MiddleNavComponent', () => {
  let component: MiddleNavComponent;
  let fixture: ComponentFixture<MiddleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
