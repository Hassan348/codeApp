import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizhomePage } from './quizhome.page';

describe('QuizhomePage', () => {
  let component: QuizhomePage;
  let fixture: ComponentFixture<QuizhomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizhomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
