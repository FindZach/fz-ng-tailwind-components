import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindComponentsComponent } from './tailwind-components.component';

describe('TailwindComponentsComponent', () => {
  let component: TailwindComponentsComponent;
  let fixture: ComponentFixture<TailwindComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
