import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Constants } from '../../constants';
import { Movie } from '../../models/movie';
import { environment } from '../../../environments/environment';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Array<IMovie> = new Array<Movie>();
  searchType: string;

  constructor(private apiService: ApiService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.route.data.subscribe((data) => this.searchType = data.searchType);
    this.apiService.get(this.searchType)
      .subscribe(data => {
        this.bindMovies(data);
      });
  }

  bindMovies(data: Array<Movie>) {
    console.log(data)
    data.forEach((m: IMovie, index) => {      
      let localMovie: IMovie = new Movie();
      localMovie.id = m.id;
      localMovie.original_language = m.original_language;
      localMovie.overview = m.overview.substring(0, 125);
      localMovie.popularity = m.popularity;
      localMovie.poster_path = m.poster_path;
      localMovie.new_path = `${environment.baseImageUrl}${Constants.UrlConstants.thumbnailUrl}${m.poster_path}`;
      localMovie.release_date = m.release_date;
      localMovie.title = m.title;
      localMovie.vote_average = m.vote_average;
      localMovie.vote_count = m.vote_count;
      localMovie.isWatchList = m.isWatchList;
      if (index < 8)
        this.movies.push(localMovie);
    });
  }
}