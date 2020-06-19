import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


import {PlayersService } from './players.service';


describe('PlayersService', () => {
  let playersService: PlayersService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ PlayersService ]
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
});
