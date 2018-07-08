import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CustomRouterModule } from '../app/modules/router.module'
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { MyMaterialModuleModule } from './my-material-module/my-material-module.module';
import { SearchComponent } from './components/search/search.component';
import { HttpModule } from '@angular/http';
import { ApiService } from './services/api.service';
import { MovieComponent } from './components/movie/movie.component';
import { Constants } from './constants';
import { SingleMovieComponent } from './components/single-movie/single-movie.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppGuardGuard } from './app-guard.guard';

import { AppComponent } from './app.component';

describe("App Component Tests", () => {
    let component: ComponentFixture<AppComponent>;
    let element: DebugElement;
    let html: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                FooterComponent,
                MoviesComponent,
                HeaderComponent,
                NavComponent,
                SearchComponent,
                MovieComponent,
                SingleMovieComponent,
                LoginComponent,
                RegisterComponent
            ],
            imports: [
                MDBBootstrapModule.forRoot(), HttpModule,
                BrowserModule, BrowserAnimationsModule, FormsModule, MyMaterialModuleModule,
                CustomRouterModule
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        });

        component = TestBed.createComponent(AppComponent);
    }));

    it("Check the title", async(() => {
        let title = 'Welcome to M4Movies App!';
        component.detectChanges();
        element = component.debugElement.query(By.css('h2'));
        html = element.nativeElement; 
        expect(html.innerText).toBe(title);
    }));
});