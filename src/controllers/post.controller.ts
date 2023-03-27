import { UpdatePostDTO } from './dto/updatePost.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { CreatePostDTO } from './dto/createPost.dto';
import { PostEntity } from '../database/entities/post.entity';
import { PostService } from '../service/post.service';

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get('list')
  async listAll(): Promise<PostEntity[]> {
    return await this._postService.list();
  }

  @Get(':uuid')
  async get(@Param() params: any): Promise<PostEntity> {
    const { uuid } = params;

    const post: PostEntity = await this._postService.find(uuid);
    if (!post) {
      throw new Error('Postagem não encontrada.');
    }

    return post;
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

  @Put(':uuid')
  async update(
    @Param() params: any,
    @Body() data: UpdatePostDTO,
  ): Promise<PostEntity> {
    const { uuid } = params;
    const post: PostEntity = await this._postService.find(uuid);
    if (!post) {
      throw new Error('Postagem não encontrada.');
    }

    post.title = data.title && data.title.toLowerCase().trim();
    post.description =
      data.description && data.description.toLowerCase().trim();
    post.content = data.content && data.content.trimEnd();

    await this._postService.update(post);
    return post;
  }

  @Delete(':uuid')
  async delete(@Param() params: any): Promise<void> {
    const { uuid } = params;
    const post: PostEntity = await this._postService.find(uuid);
    if (!post) {
      throw new Error('Postagem não encontrada.');
    }

    await this._postService.delete(post);
  }
}
