import { async, fakeAsync, TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { By } from '@angular/platform-browser';
import { FormsModule, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { CustomRouterModule } from '../../modules/router.module';
import { MoviesComponent } from '../movies/movies.component';
import { SingleMovieComponent } from '../single-movie/single-movie.component';
import { LoginComponent } from '../login/login.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { MovieComponent } from '../movie/movie.component';
import { APP_BASE_HREF } from '@angular/common';
import { MockApiService } from '../../mocks/mock.api.service';
import { Constants } from 'src/app/constants';
import { Observable } from 'rxjs';

describe("Movies component tests", () => {
    let componentFixture: ComponentFixture<MoviesComponent>;
    let component: MoviesComponent;
    let debugElement: DebugElement;
    let html: HTMLTextAreaElement;
    let apiService: ApiService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpModule, CustomRouterModule,
                FormsModule, HttpModule],
            declarations: [
                RegisterComponent, MoviesComponent, SingleMovieComponent,
                LoginComponent, MovieComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                FormBuilder, ApiService
            ]
        }).compileComponents();

        componentFixture = TestBed.createComponent(MoviesComponent);
        component = componentFixture.componentInstance;

        debugElement = componentFixture.debugElement.query(By.css(".row"));
        html = debugElement.nativeElement;

        apiService = TestBed.get(ApiService);
        spyOn(apiService, "get").and.returnValue(new Observable<any>());
    }));

    it("should show popular movies", async(() => {
        component.getMovies();
        componentFixture.detectChanges();
        expect(apiService.get).toHaveBeenCalled();
    }));
});