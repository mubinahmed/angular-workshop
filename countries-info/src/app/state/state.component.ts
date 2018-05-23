import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Country } from '../models/country';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../services/country.service';
import { State } from '../models/state';

@Component({
  selector: 'tmt-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit, OnDestroy {

  states: State[];
  subscriber: any;
 
  //ActivatedRoute
  constructor(private countryService: CountryService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.subscriber = this.activatedRoute.params.subscribe(
      params => {
        let countryCode = params['countryCode'];
        this.states = countryService.getStatesByCountryCode(countryCode);
      }
    );
   }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  goToMainPage() {
    let link = ['/countries-list'];
    this.router.navigate(link);
  }

}
