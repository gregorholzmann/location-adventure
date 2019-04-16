import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaceFeatureShellComponent } from './place-feature-shell.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PlaceFeatureShellComponent },
    ]),
  ]
})
export class PlaceFeatureShellModule {}
