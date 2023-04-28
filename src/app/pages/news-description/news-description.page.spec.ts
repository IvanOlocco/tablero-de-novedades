import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsDescriptionPage } from './news-description.page';

describe('NewsDescriptionPage', () => {
  let component: NewsDescriptionPage;
  let fixture: ComponentFixture<NewsDescriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
