import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TicketFilter, TicketWithUser, User } from '../_models';
import {
  RootStoreSelectors,
  RootStoreState,
  TicketStoreActions,
  TicketStoreSelectors,
  UserStoreSelectors
} from '../_store';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketsWithUsers$: Observable<TicketWithUser[]>;
  users$: Observable<User[]>;
  currentFilter$: Observable<TicketFilter>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.ticketsWithUsers$ = this.store.select(
      RootStoreSelectors.selectFilteredTicketItemsWithUser
    );
    this.currentFilter$ = this.store.select(
      TicketStoreSelectors.selectTicketCurrentFilter
    );
    this.isLoading$ = this.store.select(RootStoreSelectors.selectIsLoading);
    this.users$ = this.store.select(UserStoreSelectors.selectAllUserItems);
  }

  onSelectTicket(ticketId: number) {
    this.store.dispatch(
      new TicketStoreActions.SelectTicketAction({ ticketId })
    );
  }

  onFilterTickets(filter: TicketFilter) {
    this.store.dispatch(new TicketStoreActions.FilterTicketsAction({ filter }));
  }
}
