import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractivitymapComponent } from './interactivitymap.component';

describe('InteractivitymapComponent', () => {
  let component: InteractivitymapComponent;
  let fixture: ComponentFixture<InteractivitymapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractivitymapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractivitymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
