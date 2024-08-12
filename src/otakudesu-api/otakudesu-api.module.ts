import { Module } from '@nestjs/common';
import { OtakudesuApiController } from './otakudesu-api.controller';
import { OtakudesuApiService } from './otakudesu-api.service';

@Module({})
export class OtakudesuApiModule {
    controllers: [OtakudesuApiController]
    service: [OtakudesuApiService]
}

