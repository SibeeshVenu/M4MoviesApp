import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { ApiService } from '../../services/api.service';
import { Constants } from '../../constants';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: IMovie;

  constructor(private authService: AuthService,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
  };

  addOrRemoveWatchList() {
    this.movie.userid = Number(this.authService.getLoggedInUserId());
    if (this.movie.isWatchList) {
      this.apiService.delete(Constants.UrlConstants.removeFromWatchList, this.movie)
        .subscribe(data => {
          window.location.reload();
        });
    } else {
      this.apiService.post(Constants.UrlConstants.addToWatchList, this.movie)
        .subscribe(data => {
          this.router.navigate(['movies/watchlist']);
        });
    }
  };
}
