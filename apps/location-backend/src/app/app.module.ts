import { Module, HttpModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoProcessingService } from './photo-processing.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    PhotoProcessingService
  ],
})
export class AppModule {}
