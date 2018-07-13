import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CustomRouterModule } from '../app/modules/router.module'

import { AppComponent } from './app.component';
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
import { DummyComponent } from './components/dummy/dummy.component';


@NgModule({
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
    RegisterComponent,
    DummyComponent    
  ],
  imports: [
    MDBBootstrapModule.forRoot(), HttpModule,
    BrowserModule, BrowserAnimationsModule, FormsModule, MyMaterialModuleModule,
    CustomRouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ApiService, AppGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
