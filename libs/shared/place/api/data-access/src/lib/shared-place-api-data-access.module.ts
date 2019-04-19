import { Module, HttpModule } from '@nestjs/common';
import { SharedPlaceApiDataAccessService } from './shared-place-api-data-access.service';

@Module({
  imports: [HttpModule],
  providers: [SharedPlaceApiDataAccessService],
  exports: [SharedPlaceApiDataAccessService]
})
export class SharedPlaceApiDataAccessModule {}
