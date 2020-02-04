import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssgridComponent } from './cssgrid.component';

describe('CssgridComponent', () => {
  let component: CssgridComponent;
  let fixture: ComponentFixture<CssgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
