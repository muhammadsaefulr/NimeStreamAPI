import { Test, TestingModule } from '@nestjs/testing';
import { OtakudesuApiController } from './otakudesu-api.controller';

describe('OtakudesuApiController', () => {
  let controller: OtakudesuApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtakudesuApiController],
    }).compile();

    controller = module.get<OtakudesuApiController>(OtakudesuApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
