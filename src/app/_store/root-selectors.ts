import { createSelector } from '@ngrx/store';
import { Ticket, TicketWithUser, User } from '../_models';
import { TicketStoreSelectors } from './ticket-store';
import { UserStoreSelectors } from './user-store';

export const selectError = createSelector(
  TicketStoreSelectors.selectTicketError,
  UserStoreSelectors.selectUserError,
  (ticketError: string, userError: string) => {
    return ticketError || userError;
  }
);

export const selectIsLoading = createSelector(
  TicketStoreSelectors.selectTicketIsLoading,
  UserStoreSelectors.selectUserIsLoading,
  (ticketLoading: boolean, userLoading: boolean) => {
    return ticketLoading || userLoading;
  }
);

export const selectFilteredTicketItemsWithUser = createSelector(
  TicketStoreSelectors.selectFilteredTicketItems,
  UserStoreSelectors.selectAllUserItems,
  (filteredTickets: Ticket[], users: User[]): TicketWithUser[] => {
    const ticketsWithUsers: TicketWithUser[] = [];

    filteredTickets.forEach(t => {
      const foundUser = users.find(u => u.id === t.assigneeId);

      ticketsWithUsers.push({
        assigneeId: undefined,
        ...t,
        assigneeName: foundUser ? foundUser.name : 'No User'
      });
    });

    return ticketsWithUsers;
  }
);
