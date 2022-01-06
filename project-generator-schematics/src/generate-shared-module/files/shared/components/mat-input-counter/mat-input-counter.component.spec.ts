import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputCounterComponent } from './mat-input-counter.component';

describe('MatInputCounterComponent', () => {
  let component: MatInputCounterComponent;
  let fixture: ComponentFixture<MatInputCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatInputCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
