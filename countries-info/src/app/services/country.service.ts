import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { State } from '../models/state';
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class CountryService {

  allCountries: Country[];

  constructor(private http: Http) {
    this.http.get('http:localhost:8080/countries', { headers: this.getHeaders()}).map(this.toCountry);
   }

   toCountry(response: Response) {

   }

   getHeaders() {
     let headers = new Headers();
     headers.append('Accept', 'application/json');
     return headers;
   }

  getAllCountries(): Country[] {
    return this.allCountries;
  }

  getStatesByCountryCode(isoCode: string): State[] {
    return this.allCountries.find(country => country.isoCode === isoCode).states;
  }
}
