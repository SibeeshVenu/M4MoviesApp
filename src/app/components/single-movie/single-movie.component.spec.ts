import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMovieComponent } from './single-movie.component';

describe('SingleMovieComponent', () => {
  let component: SingleMovieComponent;
  let fixture: ComponentFixture<SingleMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
