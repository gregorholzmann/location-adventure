import { Module } from '@nestjs/common';
import { SharedPlaceApiFeaturePhotoProcessingService } from './shared-place-api-feature-photo-processing.service';

@Module({
  providers: [SharedPlaceApiFeaturePhotoProcessingService],
  exports: [SharedPlaceApiFeaturePhotoProcessingService]
})
export class SharedPlaceApiFeaturePhotoProcessingModule {}
