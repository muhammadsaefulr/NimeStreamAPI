import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtakudesuApiController } from './otakudesu-api/otakudesu-api.controller';
import { OtakudesuApiService } from './otakudesu-api/otakudesu-api.service';
import { OtakudesuApiModule } from './otakudesu-api/otakudesu-api.module';

@Module({
  imports: [OtakudesuApiModule],
  controllers: [AppController, OtakudesuApiController],
  providers: [AppService, OtakudesuApiService],
})
export class AppModule {}
