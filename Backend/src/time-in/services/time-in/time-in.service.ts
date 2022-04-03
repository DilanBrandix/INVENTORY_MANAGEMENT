import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { TimeInPostEntity } from 'src/time-in/model/post.entity';
import { TimeInPost } from 'src/time-in/model/post.interface';
import { Repository } from 'typeorm';

@Injectable()
export class TimeInService {
  constructor(
    @InjectRepository(TimeInPostEntity)
    private readonly timeinPostRepository: Repository<TimeInPostEntity>,
  ) {}
  createPost(timeinPost: TimeInPost): Observable<TimeInPost> {
    return from(this.timeinPostRepository.save(timeinPost));
  }
}
