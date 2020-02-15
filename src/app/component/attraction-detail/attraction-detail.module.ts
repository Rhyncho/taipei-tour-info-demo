import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AttractionDetailComponent } from './attraction-detail.component';

@NgModule({
  declarations: [
    AttractionDetailComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    SlickCarouselModule
  ],
  exports: [
    AttractionDetailComponent
  ]
})
export class AttractionDetailModule { }
