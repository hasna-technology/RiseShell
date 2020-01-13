import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePropertyComponent } from './page-property.component';

describe('PagePropertyComponent', () => {
  let component: PagePropertyComponent;
  let fixture: ComponentFixture<PagePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
