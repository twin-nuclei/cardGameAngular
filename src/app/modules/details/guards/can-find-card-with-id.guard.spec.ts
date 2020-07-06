import {async, TestBed} from '@angular/core/testing';

import { CanFindCardWithIdGuard } from './can-find-card-with-id.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {CardComponent} from '../../overview/components/card/card.component';
import {PlayersService} from '../../shared/services/players.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('NotFoundGuard', () => {
  let guard: CanFindCardWithIdGuard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ ],
      providers: [ PlayersService ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanFindCardWithIdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
