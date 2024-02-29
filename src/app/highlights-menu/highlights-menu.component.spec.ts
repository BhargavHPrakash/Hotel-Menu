import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightsMenuComponent } from './highlights-menu.component';

describe('HighlightsMenuComponent', () => {
  let component: HighlightsMenuComponent;
  let fixture: ComponentFixture<HighlightsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlightsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
