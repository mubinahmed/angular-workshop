
import { Routes, RouterModule } from '@angular/router';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { StateComponent } from './state/state.component';

const routes: Routes = [
   {
       path: 'countries-list',
       component: CountriesListComponent
   },
   {
       path: '',
       redirectTo: '/countries-list',
       pathMatch: 'full'
   },
   {
       path: 'states/:countryCode',
       component: StateComponent
   }
];

export const appRouterModule = RouterModule.forRoot(routes);