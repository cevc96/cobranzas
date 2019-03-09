import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { MatDialog } from '@angular/material';
import { CsCobranzasModalCreateEvent } from './dialogs/cs-cobranzas-modal-create-event/cs-cobranzas-modal-create-event.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService]
})
export class AppComponent {
  title = 'cobranzas';
  selectedDate: Date = new Date(2019, 2, 19);
  data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2019, 2, 19, 10, 0),
    EndTime: new Date(2019, 2, 19, 12, 30)
  }];

  eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
  constructor(public dialog: MatDialog){

  }

  openModalCreate() {
    let dialogRef = this.dialog.open(CsCobranzasModalCreateEvent, {
      width : '250px'
    });
  }
}
