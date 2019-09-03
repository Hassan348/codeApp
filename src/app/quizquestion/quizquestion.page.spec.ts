import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizquestionPage } from './quizquestion.page';

describe('QuizquestionPage', () => {
  let component: QuizquestionPage;
  let fixture: ComponentFixture<QuizquestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizquestionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizquestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
