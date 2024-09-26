import { Injectable } from '@nestjs/common';

@Injectable()
//so we can call commentservice and findusercomment inside the user controller..
export class CommentService {
  findUserComments(userId: string) {
    return 'this is the comment of the user';
  }
}
