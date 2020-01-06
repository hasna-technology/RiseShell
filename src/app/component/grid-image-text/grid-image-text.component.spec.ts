import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridImageTextComponent } from './grid-image-text.component';

describe('GridImageTextComponent', () => {
  let component: GridImageTextComponent;
  let fixture: ComponentFixture<GridImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
