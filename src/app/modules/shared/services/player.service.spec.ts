import {TestBed, inject, async, fakeAsync} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Player} from '../interfaces/player';


import {PlayersService} from './players.service';
import {RouterTestingModule} from '@angular/router/testing';


describe('PlayersService', () => {
  let playersService: PlayersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [PlayersService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    playersService = TestBed.inject(PlayersService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([PlayersService], (service: PlayersService) => {
    expect(service).toBeTruthy();
  }));

  it('can instantiate service with "new"', inject([HttpClient], (http: HttpClient) => {
    expect(http).not.toBeNull('http should be provided');
    const service = new PlayersService(http);
    expect(service instanceof PlayersService).toBe(true, 'new service should be OK');
  }));

  // it('should return all players', (done) => {
  //   let expectedPlayers: Player[];
  //
  //
  //   expectedPlayers = [
  //     {id: 0, realName: 'Brianna Forbes', playerName: 'Dreamlurk The Unstoppable', asset: 'Foghammer Lead'}
  //   ] as Player[];
  //
  //   console.log('A');
  //   playersService
  //     .getPlayers()
  //     .subscribe(
  //       (players) => {
  //         setTimeout(() => {
  //           console.log('B');
  //           expect(players).toEqual(expectedPlayers);
  //           done();
  //         }, 1000);
  //       }
  //     );
  //   console.log('C');
  //   const req = httpTestingController.expectOne(playersService.playersUrl);
  //   expect(req.request.method).toEqual('GET');
  //   req.flush(expectedPlayers);
  // });
});
