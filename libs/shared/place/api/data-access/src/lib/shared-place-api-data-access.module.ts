import { Module } from '@nestjs/common';
import { SharedPlaceApiDataAccessService } from './shared-place-api-data-access.service';

@Module({
  providers: [SharedPlaceApiDataAccessService],
  exports: [SharedPlaceApiDataAccessService]
})
export class SharedPlaceApiDataAccessModule {}
