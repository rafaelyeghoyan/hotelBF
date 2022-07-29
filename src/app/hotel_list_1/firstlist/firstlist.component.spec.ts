import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstlistComponent } from './firstlist.component';

describe('FirstlistComponent', () => {
  let component: FirstlistComponent;
  let fixture: ComponentFixture<FirstlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
