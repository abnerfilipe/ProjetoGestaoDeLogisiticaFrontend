import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogExcluir',
  templateUrl: './dialogExcluir.component.html',
  styleUrls: ['./dialogExcluir.component.scss']
})
export class DialogExcluirComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExcluirComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}
