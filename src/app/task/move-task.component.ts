import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-move-task',
  template: `
<form>
  <h2 mat-dialog-title>Move Task</h2>
  <div mat-dialog-content>
    <mat-select placeholder="Placeholder" [(ngModel)]="selectedValue" name="item">
      <mat-option *ngFor="let item of lists" [value]="item">
        {{item.name}}
      </mat-option>
    </mat-select>
  </div>
  <div mat-dialog-actions>
    <button mat-raised-button type="button" color="primary" (click)="onSave()">Save</button>
    <button mat-raised-button type="button" mat-dialog-close>Close</button>
  </div>
</form>
  `,
  styles: []
})
export class MoveTaskComponent implements OnInit {

  @Input() lists: any[];

  selectedValue: string;

  constructor(@Inject(MAT_DIALOG_DATA) private date,
    private dialogRef: MatDialogRef<MoveTaskComponent>
  ) {
    this.lists = date
  }

  ngOnInit() {

  }

  onSave() {
    this.dialogRef.close(this.selectedValue);
  }
}
