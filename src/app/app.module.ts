import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListFilterFormComponent } from './ticket-list-filter-form/ticket-list-filter-form.component';
import { TicketListGridComponent } from './ticket-list-grid/ticket-list-grid.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { RootStoreModule } from './_store/root-store.module';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailComponent,
    TicketListFilterFormComponent,
    TicketListGridComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RootStoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
