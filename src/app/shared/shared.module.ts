import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule, MatMenuModule, MatCheckboxModule, MatSelectModule, MatTooltipModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatCardModule, MatListModule, MatGridListModule, MatDialogModule, MatAutocompleteModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MAT_MODULE = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTooltipModule,
  MatRadioModule,
  //MaterialModule,            // <----- this module will be deprecated in the future version.
  MatDatepickerModule,        // <----- import(must)
  MatNativeDateModule,        // <----- import for date formating(optional)
]
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ...MAT_MODULE],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, ...MAT_MODULE]
})
export class SharedModule { }
