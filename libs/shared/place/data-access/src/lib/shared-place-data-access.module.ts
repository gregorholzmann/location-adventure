import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPlaceDataAccessService } from './shared-place-data-access.service.';

@NgModule({
  imports: [CommonModule],
  providers: [SharedPlaceDataAccessService]
})
export class SharedPlaceDataAccessModule {}
