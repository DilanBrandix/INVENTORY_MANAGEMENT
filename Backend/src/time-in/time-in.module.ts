import { Module } from '@nestjs/common';
import { TimeInService } from './services/time-in/time-in.service';
import { TimeInController } from './controllers/time-in/time-in.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeInPostEntity } from './model/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TimeInPostEntity])],
  providers: [TimeInService],
  controllers: [TimeInController],
})
export class TimeInModule {}
