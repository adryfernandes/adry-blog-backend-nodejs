import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param } from '@nestjs/common/decorators';
import { CreatePostDTO } from './dto/createPost.dto';
import { PostEntity } from '../database/entities/post.entity';
import { PostService } from '../service/post.service';

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get()
  async listAll(): Promise<PostEntity[]> {
    return await this._postService.list();
  }

  @Post()
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

  @Delete(':uuid')
  async delete(@Param() params: any): Promise<void> {
    const { uuid } = params;
    const post: PostEntity = await this._postService.get({ where: { uuid } });
    if (!post) {
      throw new Error('Postagem não encontrada.');
    }

    await this._postService.delete(post);
  }
}
