import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { TimeInPostEntity } from 'src/time-in/model/post.entity';
import { TimeInPost } from 'src/time-in/model/post.interface';
import { arrayBuffer } from 'stream/consumers';
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
  findAllPost(userRole: string): Observable<TimeInPost[]> {
    // const general: any[] = [];
    // const shiftA : any[] = [];
    // const shiftB : any[] = [];
    // let roles: string;

    if (userRole === 'admin') {
      return from(this.timeinPostRepository.find());
    } else {
      roles: return from(this.timeinPostRepository.find({ section: userRole }));
      // return from(this.timeinPostRepository.find({ section: userRole }));
    }
    // if (userRole !== 'admin') {
    //   const a = roles.array.map(item  => {
    //     if (item.shift === 'General') {
    //       general.push(item);
    //     }
    //   });
    // }
  }
}
