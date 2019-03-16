import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';
import { MatDialogModule, MatIconModule, MatButtonModule } from '@angular/material';

import { CsCobranzasModalCreateEvent } from './dialogs/cs-cobranzas-modal-create-event/cs-cobranzas-modal-create-event.component';

/**
 * Module
 */
@NgModule({
  imports: [
    BrowserModule,
    ScheduleModule,
    ButtonModule,
    ContextMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  declarations: [AppComponent, CsCobranzasModalCreateEvent],
  bootstrap: [AppComponent],
  providers: [DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService, 
    MonthAgendaService],
  entryComponents: [
    CsCobranzasModalCreateEvent
  ]
})
export class AppModule { }