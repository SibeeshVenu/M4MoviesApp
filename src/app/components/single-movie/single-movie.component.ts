import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Constants } from 'src/app/constants';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Movie } from '../../models/movie';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  movie: IMovie = new Movie();
  id: number;
  constructor(private apiService: ApiService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getMovie();
    if (this.authService.isLoggedIn()) {
      this.movie.userid = Number(this.authService.getLoggedInUserId());
      this.getComments();
    }
  }

  getMovie() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.apiService.get(`${"movies/"}${this.id}`)
      .subscribe(data => {
        this.bindMovie(data);
      });
  };

  getComments() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.apiService.get(`${"movies/getComments?movieId="}${this.id}${"&userId="}${this.authService.getLoggedInUserId()}`)
      .subscribe(data => {
        this.bindComment(data);
      });
  };

  bindMovie(obj) {
    this.movie.id = obj.id;
    this.movie.original_language = obj.original_language;
    this.movie.overview = obj.overview;
    this.movie.popularity = obj.popularity;
    this.movie.poster_path = obj.poster_path;
    this.movie.new_path = `${environment.baseImageUrl}${Constants.UrlConstants.singleImglUrl}${obj.poster_path}`;
    this.movie.release_date = obj.release_date;
    this.movie.title = obj.title;
    this.movie.vote_average = obj.vote_average;
    this.movie.vote_count = obj.vote_count;
    this.movie.isWatchList = obj.isWatchList;
    this.movie.watchListMovieId = obj.watchListMovieId;
  };

  bindComment(obj) {
    this.movie.comments = obj.comments;
  };

  addComment() {
    if (this.authService.isLoggedIn()) {
      this.movie.userid = Number(this.authService.getLoggedInUserId());
    }
    this.apiService.post(Constants.UrlConstants.addComment, this.movie)
      .subscribe(data => {
        this.bindMovie(data);
      });
  }
}
