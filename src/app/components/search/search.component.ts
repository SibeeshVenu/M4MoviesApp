import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Constants } from '../../constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string;
  constructor(private auth: AuthService, private route: Router) {
  }
  search() {
    this.auth.setSearchText(this.searchText);
    this.redirect('movies/search/' + this.searchText);
  }

  redirect(uri: string) {
    this.route.navigateByUrl('/DummyComponent', { skipLocationChange: true }).then(() => {
      this.route.navigate([uri]);
    });
  }
}
