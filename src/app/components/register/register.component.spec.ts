import { async, fakeAsync, TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RegisterComponent } from './register.component';
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

describe("Register component tests", () => {
    let componentFixture: ComponentFixture<RegisterComponent>;
    let component: RegisterComponent;
    let debugElement: DebugElement;
    let html: HTMLTextAreaElement;
    let apiService: ApiService;
    let validUser: {
        name: "a",
        mail: "a@a.com",
        pass: "123"
    };
    let invalidUser: {
        name: "",
        mail: "",
        pass: ""
    };

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

        componentFixture = TestBed.createComponent(RegisterComponent);
        component = componentFixture.componentInstance;
        //apiService = TestBed.get(ApiService);
        //spyOn(apiService, "post").and.callThrough();
        // spyOn(component, "onSuccess").and.callThrough();
    }));

    var updateForm = function (name, mail, pass) {
        component.registerForm.controls["orangeFormName"].setValue(name);
        component.registerForm.controls["orangeFormEmail"].setValue(mail);
        component.registerForm.controls["orangeFormPass"].setValue(pass);
    }

    it("Name in the form should be valid", fakeAsync(() => {
        debugElement = componentFixture.debugElement.query(By.css("#orangeForm-name"));
        html = debugElement.nativeElement;
        updateForm("a", "", "");
        componentFixture.detectChanges();
        expect(html.value).toBe("a");
    }));

    it("Mail in the form should be valid", fakeAsync(() => {
        debugElement = componentFixture.debugElement.query(By.css("#orangeForm-email"));
        html = debugElement.nativeElement;
        updateForm("", "a@a.com", "");
        componentFixture.detectChanges();
        expect(html.value).toBe("a@a.com");
    }));

    it("Password in the form should be valid", fakeAsync(() => {
        debugElement = componentFixture.debugElement.query(By.css("#orangeForm-pass"));
        html = debugElement.nativeElement;
        updateForm("", "", "1234");
        componentFixture.detectChanges();
        expect(html.value).toBe("1234");
    }));

    it("Form should be valid", fakeAsync(() => {
        updateForm("a", "a@a.com", "1234");
        componentFixture.detectChanges();
        expect(component.registerForm.valid).toBeTruthy();
    }));

    it("Form should be invalid", fakeAsync(() => {
        updateForm("", "", "");
        componentFixture.detectChanges();
        expect(component.registerForm.valid).toBeFalsy();
    }));

    // it("Should call register function successfully", async(() => {
    //     debugElement = componentFixture.debugElement.query(By.css("#btnSubmit"));
    //     html = debugElement.nativeElement;
    //     updateForm("a", "a@a.com", "1234");
    //     componentFixture.detectChanges();
    //     html.click();
    //     component.register();
    //     expect(apiService.post).toHaveBeenCalled();
    //     expect(component.onSuccess).toHaveBeenCalled();
    // }));
});