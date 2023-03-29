import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Param, Query } from '@nestjs/common/decorators';
import { Paginate } from './../utils/paginate';
import {
  QueryParamsPaginate,
  PaginateResponse,
} from './../interfaces/paginate.interface';
import { UpdatePostDTO } from './dto/post/updatePost.dto';
import { PostEntity } from '../database/entities/post.entity';
import { PostService } from '../services/post.service';
import { CreatePostDTO } from './dto/post/createPost.dto';

@Controller('post')
export class PostController {
  constructor(private _postService: PostService) {}

  @Get('list')
  async listAll(
    @Query() queryParams: QueryParamsPaginate,
  ): Promise<PaginateResponse> {
    const query: QueryParamsPaginate = Paginate.handleQueryParams(queryParams);
    return await this._postService.list(query);
  }

  @Get(':uuid')
  async get(@Param() params: any): Promise<PostEntity> {
    const { uuid } = params;

    const post: PostEntity = await this._postService.findOne(uuid);
    if (!post) {
      throw new HttpException('Postagem não encontrada.', HttpStatus.NOT_FOUND);
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
    const post: PostEntity = await this._postService.findOne(uuid);
    if (!post) {
      throw new HttpException('Postagem não encontrada.', HttpStatus.NOT_FOUND);
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
    const post: PostEntity = await this._postService.findOne(uuid);
    if (!post) {
      throw new HttpException('Postagem não encontrada.', HttpStatus.NOT_FOUND);
    }

    await this._postService.delete(post);
  }
}
