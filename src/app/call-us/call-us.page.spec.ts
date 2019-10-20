import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUsPage } from './call-us.page';

describe('CallUsPage', () => {
  let component: CallUsPage;
  let fixture: ComponentFixture<CallUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallUsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
