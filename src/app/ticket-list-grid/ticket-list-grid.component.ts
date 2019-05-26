import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TicketWithUser } from '../_models';

@Component({
  selector: 'app-ticket-list-grid',
  templateUrl: './ticket-list-grid.component.html',
  styleUrls: ['./ticket-list-grid.component.css']
})
export class TicketListGridComponent implements OnInit {
  @Input() ticketsWithUsers: TicketWithUser[];
  @Input() isLoading: boolean;

  @Output() selectTicket = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}
}
