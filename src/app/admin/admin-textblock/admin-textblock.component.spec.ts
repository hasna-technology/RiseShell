import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTextblockComponent } from './admin-textblock.component';

describe('AdminTextblockComponent', () => {
  let component: AdminTextblockComponent;
  let fixture: ComponentFixture<AdminTextblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTextblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTextblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
