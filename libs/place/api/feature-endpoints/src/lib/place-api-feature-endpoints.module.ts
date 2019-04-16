import { Module } from '@nestjs/common';
import { PlaceApiFeatureEndpointsController } from './place-api-feature-endpoints.controller';
import { SharedPlaceApiDataAccessModule } from '@location-adventure/shared/place/api/data-access';
import { SharedPlaceApiFeaturePhotoProcessingModule } from '@location-adventure/shared/place/api/feature-photo-processing';
@Module({
  imports: [
    SharedPlaceApiDataAccessModule,
    SharedPlaceApiFeaturePhotoProcessingModule
  ],
  controllers: [PlaceApiFeatureEndpointsController]
})
export class PlaceApiFeatureEndpointsModule {}
