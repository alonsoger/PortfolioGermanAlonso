import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HApComponent } from './h-ap.component';

describe('HApComponent', () => {
  let component: HApComponent;
  let fixture: ComponentFixture<HApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
