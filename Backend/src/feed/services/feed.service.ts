import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.inteface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) {}
  createPost(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost));
  }

  getSpecific(id: number): Promise<any> {
    return this.feedPostRepository.findOne(id);
  }

  findAllPost(userRole: string): Observable<FeedPost[]> {
    if (userRole === 'admin') {
      return from(this.feedPostRepository.find());
    } else {
      return from(this.feedPostRepository.find({ section: userRole }));
    }
  }

  updatePost(feedPost: FeedPost): Promise<any> {
    return this.feedPostRepository.save(feedPost);
  }
}
