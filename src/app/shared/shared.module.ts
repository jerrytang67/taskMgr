import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatCardModule, MatListModule, MatGridListModule, MatDialogModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const MAT_MODULE = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule
]
@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, HttpClientModule, ...MAT_MODULE],
  exports: [CommonModule, FormsModule, HttpClientModule, ...MAT_MODULE]
})
export class SharedModule { }
