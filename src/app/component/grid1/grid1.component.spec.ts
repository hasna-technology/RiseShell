import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent1 } from './grid1.component';

describe('GridComponent', () => {
  let component: GridComponent1;
  let fixture: ComponentFixture<GridComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
