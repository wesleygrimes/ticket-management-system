import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TicketStoreModule } from './ticket-store/ticket-store.module';
import { UserStoreModule } from './user-store/user-store.module';

@NgModule({
  imports: [
    CommonModule,
    TicketStoreModule,
    UserStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}
