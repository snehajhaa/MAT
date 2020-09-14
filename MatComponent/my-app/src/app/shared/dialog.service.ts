import { Injectable } from '@angular/core';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(){
    this.dialog.open(MatConfirmDialogComponent,{
      width:"390px",
      panelClass:'confirm-dialog-container',
      disableClose: true,
      data :{
        message : 'msg'
      }
    });
  }
}
