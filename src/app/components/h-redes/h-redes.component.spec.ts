import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HRedesComponent } from './h-redes.component';

describe('HRedesComponent', () => {
  let component: HRedesComponent;
  let fixture: ComponentFixture<HRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HRedesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
