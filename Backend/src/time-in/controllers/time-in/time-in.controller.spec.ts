import { Test, TestingModule } from '@nestjs/testing';
import { TimeInController } from './time-in.controller';

describe('TimeInController', () => {
  let controller: TimeInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimeInController],
    }).compile();

    controller = module.get<TimeInController>(TimeInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
