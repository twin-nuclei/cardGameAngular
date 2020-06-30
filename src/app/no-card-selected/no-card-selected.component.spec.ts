import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCardSelectedComponent } from './no-card-selected.component';

describe('NoCardSelectedComponent', () => {
  let component: NoCardSelectedComponent;
  let fixture: ComponentFixture<NoCardSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoCardSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCardSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
