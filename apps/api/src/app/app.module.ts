import { Module } from '@nestjs/common';
import { PlaceApiFeatureEndpointsModule } from '@location-adventure/place/api/feature-endpoints';

@Module({
  imports: [PlaceApiFeatureEndpointsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
