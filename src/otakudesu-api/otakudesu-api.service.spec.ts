import { Test, TestingModule } from '@nestjs/testing';
import { OtakudesuApiService } from './otakudesu-api.service';

describe('OtakudesuApiService', () => {
  let service: OtakudesuApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtakudesuApiService],
    }).compile();

    service = module.get<OtakudesuApiService>(OtakudesuApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
