import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:PageNotFoundComponent}]),
    MatButtonModule
  ]
})
export class PageNotFoundModule { }
