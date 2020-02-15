import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { AttractionListComponent } from './attraction-list.component';

@NgModule({
  declarations: [
    AttractionListComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    AttractionListComponent
  ]
})
export class AttractionListnModule { }
