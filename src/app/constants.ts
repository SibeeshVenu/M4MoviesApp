export namespace Constants {
    export class UrlConstants {
        static readonly getMovies = "movies/popular";
        static readonly getMovieById = "movies/:id";
        static readonly getPopularMovies = "movies/popular";
        static readonly getUpcomingMovies = "movies/upcoming";
        static readonly getNowPlayingMovies = "movies/now_playing";
        static readonly getTopRatedMovies = "movies/top_rated";
        static readonly addToWatchList = "movies";
        static readonly addComment = "movies/addComment";
        static readonly removeFromWatchList = "movies";
        static readonly getWatchList = "movies";
        static readonly thumbnailUrl = "w185_and_h278_bestv2";
        static readonly singleImglUrl = "w600_and_h900_bestv2";    
        static readonly register = "register";    
        static readonly login = "login";        
    }
    export class Validation {
        static readonly invalid = "Invalid form";        
    }

    export class Common {
        static readonly tokenKey = "tokenKey";        
    }
}