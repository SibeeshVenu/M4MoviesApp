import { Component } from '@angular/core';
//import { CompleterService } from 'ng-mdb-pro/pro';
//import { CompleterData } from 'ng-mdb-pro/pro/autocomplete';
import { Http } from '@angular/http';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  //public dataRemote: CompleterData;

    // constructor(private completerService: CompleterService, http: Http) {
    //     // tslint:disable-next-line:max-line-length
    //     this.dataRemote = completerService.remote('https://raw.githubusercontent.com/oferh/ng2-completer/master/demo/res/data/countries.json?', 'name', 'name');
    // }
}
