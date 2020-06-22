import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {CardComponent} from './card.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {PlayersService} from '../players.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let playerService: PlayersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, HttpClientTestingModule ],
      declarations: [ CardComponent ],
      providers: [PlayersService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    playerService = TestBed.inject(PlayersService);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should provide selected player', inject([PlayersService], (service: PlayersService) => {
    // what should be tested in this test. what makes sense?
    // answer: the/a player should be emitted. But as it is emitted to the player service,
    // do we need to test this in the player service? Or do we need to add the player service
    // as a dependency?
    const testPlayer = {id: 0, realName: 'Brianna Forbes', playerName: 'Dreamlurk The Unstoppable', asset: 'Foghammer Lead'};
    spyOn(service.selectedPlayer, 'emit');
    const element = fixture.nativeElement.querySelector('[data-qa="selectPlayer"]');
    component.player = testPlayer;
    component.selectPlayer();
    expect(service.selectedPlayer.emit).toHaveBeenCalledWith(testPlayer);
  }));
});
