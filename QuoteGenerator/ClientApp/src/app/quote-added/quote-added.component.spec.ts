import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteAddedComponent } from './quote-added.component';

describe('QuoteAddedComponent', () => {
  let component: QuoteAddedComponent;
  let fixture: ComponentFixture<QuoteAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
