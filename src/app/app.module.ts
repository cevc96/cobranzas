import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule, MatIconModule, MatButtonModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { CsCobranzasModalCreateEvent } from './dialogs/cs-cobranzas-modal-create-event/cs-cobranzas-modal-create-event.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    CsCobranzasModalCreateEvent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CsCobranzasModalCreateEvent
  ]
})
export class AppModule { }
