
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttractionDetailComponent, AttractionDetailModule } from './component/attraction-detail';
import { AttractionListComponent, AttractionListnModule } from './component/attraction-list';

const routes: Routes = [

  {
    path: ':id',
    component: AttractionDetailComponent,
  },
  {
    path: '',
    component: AttractionListComponent
  }
];

@NgModule({
  imports: [
    AttractionListnModule,
    AttractionDetailModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: true,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
