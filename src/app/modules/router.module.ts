import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Constants } from '../constants';
import { MoviesComponent } from '../components/movies/movies.component';
import { SingleMovieComponent } from '../components/single-movie/single-movie.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { AppGuardGuard } from '../app-guard.guard';
import { DummyComponent } from '../components/dummy/dummy.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'DummyComponent',
        component: DummyComponent
    },
    {
        path: 'movies',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getMovies
        },
        canActivate: [AppGuardGuard]
    },
    {
        path: 'movies/popular',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getPopularMovies
        },
        canActivate: [AppGuardGuard]
    },
    {
        path: 'movies/top-rated',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getTopRatedMovies
        },
        canActivate: [AppGuardGuard]
    },
    {
        path: 'movies/now-playing',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getNowPlayingMovies
        },
        canActivate: [AppGuardGuard]
    },
    {
        path: 'movies/upcoming',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getUpcomingMovies
        },
        canActivate: [AppGuardGuard]
    },
    {
        path: 'movies/watchlist',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getWatchList
        },
        canActivate: [AppGuardGuard]
    },
    {
        path: 'movies/search/:searchText',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.search
        },
        canActivate: [AppGuardGuard]
    },
    {
        path: 'movie/:id',
        component: SingleMovieComponent,
        canActivate: [AppGuardGuard]
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class CustomRouterModule {

}
