import { Module } from '@nestjs/common';
import { LaceService } from './services/lace.service';
import { LaceController } from './controllers/lace.controller';

@Module({
  providers: [LaceService],
  controllers: [LaceController]
})
export class LaceModule {}
