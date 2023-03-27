import { CreatePostDTO } from './../dto/createPost.dto';
import { PostEntity } from './../../database/entities/post.entity';
import { PostService } from '../../service/post.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get()
  async listAll(): Promise<PostEntity[]> {
    return await this._postService.list();
  }

  @Post('create')
  async create(@Body() data: CreatePostDTO): Promise<PostEntity> {
    const postEntity = new PostEntity();
    postEntity.title = data.title.toLowerCase().trim();
    postEntity.description = data.description.toLowerCase().trim();
    postEntity.content = data.content.trimEnd();

    const savedPostEntity: PostEntity = await this._postService.create(
      postEntity,
    );

    return savedPostEntity;
  }
}
