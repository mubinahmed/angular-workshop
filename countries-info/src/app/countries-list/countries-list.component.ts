import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'tmt-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
  providers: []
})
export class CountriesListComponent implements OnInit {

  title = "Countries list";
  countries: Country[];
  selectedCountry: Country;

  constructor(private countryService : CountryService) {
   }

  ngOnInit() {
    this.countries = this.countryService.getAllCountries();
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
  }
}
