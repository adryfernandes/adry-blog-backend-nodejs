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
import { TagService } from '../services/tag.service';
import { TagEntity } from '../database/entities/tag.entity';
import {
  QueryParamsPaginate,
  PaginateResponse,
} from './../interfaces/paginate.interface';
import { UpdatePostDTO } from './dto/post/updatePost.dto';
import { PostEntity } from '../database/entities/post.entity';
import { PostService } from '../services/post.service';
import { CreatePostDTO } from './dto/post/createPost.dto';
import { Like } from 'typeorm';

@Controller('post')
export class PostController {
  constructor(
    private _postService: PostService,
    private _tagService: TagService,
  ) {}

  @Get('list')
  async listAll(
    @Query() queryParams: QueryParamsPaginate,
  ): Promise<PaginateResponse> {
    const query: QueryParamsPaginate = Paginate.handleQueryParams(queryParams);
    return await this._postService.list(query);
  }

  /**
   * Busca no título, na descrição e no conteúdo a a palavra desejada
   * @param queryParams - parâmetros de paginação
   * @param others - outros parâmetros
   * @returns
   */
  @Get('search')
  async search(
    @Query() queryParams: QueryParamsPaginate,
    @Query() others: string,
  ): Promise<PaginateResponse> {
    const search = String(others?.search)?.toLowerCase() || undefined;
    if (!search) {
      return <PaginateResponse>{ data: [], count: 0 };
    }

    const query: QueryParamsPaginate = Paginate.handleQueryParams(queryParams);

    return await this._postService.list(query, {
      where: [
        { title: Like(`%${search}%`) },
        { description: Like(`%${search}%`) },
        { content: Like(`%${search}%`) },
      ],
    });
  }

  /**
   * Busca posts com uma certa tag
   * @param queryParams
   * @param params
   * @returns
   */
  @Get('tag/:tagUUID')
  async listByTag(
    @Query() queryParams: QueryParamsPaginate,
    @Param() params: any,
  ): Promise<PaginateResponse> {
    const { tagUUID } = params;

    const query: QueryParamsPaginate = Paginate.handleQueryParams(queryParams);
    return await this._postService.list(query, {
      where: {
        tags: {
          uuid: tagUUID,
        },
      },
      relations: { tags: true },
    });
  }

  @Get(':uuid')
  async get(@Param() params: any): Promise<PostEntity> {
    const { uuid } = params;

    const post: PostEntity = await this._postService.findOne(uuid, {
      relations: { tags: true },
    });
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

    const tags: TagEntity[] = [];
    if (data.tags.length) {
      for (const tagUUID of data.tags) {
        const tag: TagEntity = await this._tagService.findOne(tagUUID);
        if (!tag) {
          throw new HttpException(
            `Tag de uuid: ${tagUUID} não encontrado.`,
            HttpStatus.NOT_FOUND,
          );
        }

        tags.push(tag);
      }
    }

    postEntity.tags = tags;

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
