import { PostService } from './../../service/post.service';
import { Controller, Get, Post } from '@nestjs/common';
import { Post as PostInterface } from '../../interfaces/post.interface';

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get()
  async listAll(): Promise<PostInterface[]> {
    return await this._postService.list();
  }

  @Post()
  create() {
    return '';
  }
}
