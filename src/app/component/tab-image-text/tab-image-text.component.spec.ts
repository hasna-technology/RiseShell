import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabImageTextComponent } from './tab-image-text.component';

describe('TabImageTextComponent', () => {
  let component: TabImageTextComponent;
  let fixture: ComponentFixture<TabImageTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabImageTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
