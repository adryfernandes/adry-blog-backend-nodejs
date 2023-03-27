import { PostEntity } from './../../database/entities/post.entity';
import { PostService } from '../../service/post.service';
import { Controller, Get, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get()
  async listAll(): Promise<PostEntity[]> {
    return await this._postService.list();
  }

  @Post()
  create() {
    return '';
  }
}
