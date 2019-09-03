import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByCategoriePage } from './list-by-categorie.page';

describe('ListByCategoriePage', () => {
  let component: ListByCategoriePage;
  let fixture: ComponentFixture<ListByCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListByCategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
