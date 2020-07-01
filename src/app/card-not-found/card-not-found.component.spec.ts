import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotFoundComponent } from './card-not-found.component';

describe('CardNotFoundComponent', () => {
  let component: CardNotFoundComponent;
  let fixture: ComponentFixture<CardNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
