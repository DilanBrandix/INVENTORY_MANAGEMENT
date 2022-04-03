import { Test, TestingModule } from '@nestjs/testing';
import { TimeInService } from './time-in.service';

describe('TimeInService', () => {
  let service: TimeInService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimeInService],
    }).compile();

    service = module.get<TimeInService>(TimeInService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
