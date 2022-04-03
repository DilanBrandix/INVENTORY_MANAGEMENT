import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { FeedPost } from '../models/post.inteface';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() FeedPost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(FeedPost);
  }
  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPost();
  }

  @Put(':no')
  update(
    @Param('no') no: number,
    @Body() feedPost: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(no, feedPost);
  }
}