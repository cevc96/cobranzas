import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatSnackBar, MatPaginator} from '@angular/material';

@Component({
    selector: 'cs-cobranzas-modal-create-event',
    templateUrl: 'cs-cobranzas-modal-create-event.component.html'
})

export class CsCobranzasModalCreateEvent {
    constructor(
        public dialogRef: MatDialogRef<CsCobranzasModalCreateEvent>,
    ) {
    }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}