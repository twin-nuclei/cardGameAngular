import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {CardComponent} from './card.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PlayersService} from '../../../shared/services/players.service';
import {Router} from '@angular/router';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let playerService: PlayersService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
      declarations: [ CardComponent ],
      providers: [PlayersService, Router ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    playerService = TestBed.inject(PlayersService);
    router = TestBed.inject(Router);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
