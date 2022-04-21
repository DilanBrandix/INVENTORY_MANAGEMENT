import { Body, Controller, Post, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { TimeInPost } from 'src/time-in/model/post.interface';
import { TimeInService } from 'src/time-in/services/time-in/time-in.service';

@Controller('time-in')
export class TimeInController {
  constructor(private timeinService: TimeInService) {}

  @Post()
  create(@Body() post: TimeInPost): Observable<TimeInPost> {
    return this.timeinService.createPost(post);
  }
  @Get()
  findAll(): Observable<TimeInPost[]> {
    return this.timeinService.findAllPost();
  }
}
