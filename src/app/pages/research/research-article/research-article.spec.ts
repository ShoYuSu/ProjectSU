import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchArticle } from './research-article';

describe('ResearchArticle', () => {
  let component: ResearchArticle;
  let fixture: ComponentFixture<ResearchArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchArticle],
    }).compileComponents();

    fixture = TestBed.createComponent(ResearchArticle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
