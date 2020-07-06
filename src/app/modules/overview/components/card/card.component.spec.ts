import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {CardComponent} from './card.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  const mockPlayer = {id: 0,"realName": "Brianna Forbes", "playerName": "Dreamlurk The Unstoppable", "asset": "Foghammer Lead"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ CardComponent ],
      providers: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.debugElement.componentInstance;
    component.player = mockPlayer;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
