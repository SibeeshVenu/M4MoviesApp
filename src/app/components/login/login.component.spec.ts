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

describe("Login component tests", () => {
    let componentFixture: ComponentFixture<LoginComponent>;
    let component: LoginComponent;
    let debugElement: DebugElement;
    let html: HTMLTextAreaElement;
    let apiService: ApiService;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpModule, CustomRouterModule,
                FormsModule, HttpModule],
            declarations: [
                RegisterComponent, MoviesComponent, SingleMovieComponent,
                LoginComponent, MovieComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                FormBuilder, ApiService,
                { provide: apiService, useClass: MockApiService }
            ]
        }).compileComponents();

        componentFixture = TestBed.createComponent(LoginComponent);
        component = componentFixture.componentInstance;
    }));

    var updateForm = function ( mail, pass) {
        component.loginForm.controls["defaultFormEmail"].setValue(mail);
        component.loginForm.controls["defaultFormPass"].setValue(pass);
    }

    it("Mail in the form should be valid", fakeAsync(() => {
        debugElement = componentFixture.debugElement.query(By.css("#defaultForm-email"));
        html = debugElement.nativeElement;
        updateForm("a@a.com", "");
        componentFixture.detectChanges();
        expect(html.value).toBe("a@a.com");
    }));

    it("Password in the form should be valid", fakeAsync(() => {
        debugElement = componentFixture.debugElement.query(By.css("#defaultForm-pass"));
        html = debugElement.nativeElement;
        updateForm("", "1234");
        componentFixture.detectChanges();
        expect(html.value).toBe("1234");
    }));

    it("Form should be valid", fakeAsync(() => {
        debugElement = componentFixture.debugElement.query(By.css("#loginForm"));
        html = debugElement.nativeElement;
        updateForm("a@a.com", "1234");
        componentFixture.detectChanges();
        expect(component.loginForm.valid).toBeTruthy();
    }));

    it("Form should be invalid", fakeAsync(() => {
        debugElement = componentFixture.debugElement.query(By.css("#loginForm"));
        html = debugElement.nativeElement;
        updateForm("", "");
        componentFixture.detectChanges();
        expect(component.loginForm.valid).toBeFalsy();
    }));
});