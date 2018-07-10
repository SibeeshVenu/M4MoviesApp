export class Movie implements IMovie {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    popularity: number;
    poster_path: string;
    original_language: string;
    overview: string;
    release_date: Date;
    new_path: string;
    isWatchList: boolean;
    production_companies: string;
    revenue: number;
    comments: string;
    userid: number;
    watchListMovieId: number;
}