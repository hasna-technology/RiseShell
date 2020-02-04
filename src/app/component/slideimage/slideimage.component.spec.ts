import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideimageComponent } from './slideimage.component';

describe('SlideimageComponent', () => {
  let component: SlideimageComponent;
  let fixture: ComponentFixture<SlideimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
