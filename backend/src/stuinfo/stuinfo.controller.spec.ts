import { Test, TestingModule } from '@nestjs/testing';
import { StuinfoController } from './stuinfo.controller';

describe('Stuinfo Controller', () => {
  let controller: StuinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StuinfoController],
    }).compile();

    controller = module.get<StuinfoController>(StuinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
