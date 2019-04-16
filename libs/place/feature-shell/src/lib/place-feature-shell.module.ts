import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlaceFeatureShellComponent } from './place-feature-shell.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PlaceFeatureShellComponent }
    ])
  ],
  declarations: [PlaceFeatureShellComponent]
})
export class PlaceFeatureShellModule {}
