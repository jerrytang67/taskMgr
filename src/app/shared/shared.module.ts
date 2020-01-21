import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';


const MAT_MODULE = [MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule]
@NgModule({
  declarations: [],
  imports: [CommonModule, ...MAT_MODULE],
  exports: [CommonModule, ...MAT_MODULE]
})
export class SharedModule { }
