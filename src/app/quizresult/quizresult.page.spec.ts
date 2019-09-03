import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizresultPage } from './quizresult.page';

describe('QuizresultPage', () => {
  let component: QuizresultPage;
  let fixture: ComponentFixture<QuizresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizresultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
