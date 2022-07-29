import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundlistComponent } from './secoundlist.component';

describe('SecoundlistComponent', () => {
  let component: SecoundlistComponent;
  let fixture: ComponentFixture<SecoundlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecoundlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
