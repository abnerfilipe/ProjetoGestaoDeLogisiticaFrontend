import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogExcluirComponent } from '../dialogExcluir/dialogExcluir.component';

interface MessageData{
  title: string,
  body: string,
}

@Component({
  selector: 'app-dialogSuccess',
  templateUrl: './dialogSuccess.component.html',
  styleUrls: ['./dialogSuccess.component.scss']
})
export class DialogSuccessComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirComponent>,
    @Inject(MAT_DIALOG_DATA) public message: MessageData) {}



  onNoClick(): void {
    this.dialogRef.close();
  }
}
