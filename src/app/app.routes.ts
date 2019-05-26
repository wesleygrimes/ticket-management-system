import { Routes } from '@angular/router';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: TicketListComponent
  },
  {
    path: 'tickets/:jokeId',
    component: TicketDetailComponent
  }
  // {
  //   path: 'tickets/create',
  //   component: TicketCreateComponent
  // }
];
