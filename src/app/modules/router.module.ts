import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Constants } from '../constants';
import { MoviesComponent } from '../components/movies/movies.component';
import { SingleMovieComponent } from '../components/single-movie/single-movie.component';
import { RegisterComponent } from '../components/register/register.component';
import { LoginComponent } from '../components/login/login.component';
import { AppGuardGuard } from '../app-guard.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    },
    {
        path: 'movies',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getMovies
        }
    },
    {
        path: 'movies/popular',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getPopularMovies
        }
    },
    {
        path: 'movies/top-rated',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getTopRatedMovies
        }
    },
    {
        path: 'movies/now-playing',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getNowPlayingMovies
        }
    },
    {
        path: 'movies/upcoming',
        component: MoviesComponent,
        data: {
            searchType: Constants.UrlConstants.getUpcomingMovies
        }
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
        path: 'movie/:id',
        component: SingleMovieComponent
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
