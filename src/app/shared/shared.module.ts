import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';

const MAT_MODULE = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatCardModule
]
@NgModule({
  declarations: [],
  imports: [CommonModule, ...MAT_MODULE],
  exports: [CommonModule, ...MAT_MODULE]
})
export class SharedModule { }
