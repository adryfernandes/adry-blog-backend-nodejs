import { Param, Put, Delete } from '@nestjs/common/decorators';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Query,
} from '@nestjs/common';
import { UpdateTagDTO } from './dto/tag/updateTag.dto';
import { Paginate } from './../utils/paginate';
import {
  QueryParamsPaginate,
  PaginateResponse,
} from './../interfaces/paginate.interface';
import { CreateTagDTO } from './dto/tag/createTag.dto';
import { TagEntity } from 'src/database/entities/tag.entity';
import { TagService } from 'src/services/tag.service';

@Controller('tag')
export class TagController {
  constructor(private _tagService: TagService) {}

  @Get('list')
  async listAll(
    @Query() queryParams: QueryParamsPaginate,
  ): Promise<PaginateResponse> {
    const query: QueryParamsPaginate = Paginate.handleQueryParams(queryParams);
    return await this._tagService.list(query);
  }

  @Get(':uuid')
  async get(@Param() params: any): Promise<TagEntity> {
    const { uuid } = params;

    const tag: TagEntity = await this._tagService.findOne(uuid);
    if (!tag) {
      throw new HttpException('Tag não encontrada.', HttpStatus.NOT_FOUND);
    }

    return tag;
  }

  @Put(':uuid')
  async update(
    @Param() params: any,
    @Body() data: UpdateTagDTO,
  ): Promise<TagEntity> {
    const { uuid } = params;
    const tag: TagEntity = await this._tagService.findOne(uuid);
    if (!tag) {
      throw new HttpException('Tag não encontrada.', HttpStatus.NOT_FOUND);
    }

    tag.title = data.title && data.title.toLowerCase().trim();
    tag.background_color =
      data.background_color && data.background_color.trim();
    tag.text_color = data.text_color && data.text_color.trim();

    await this._tagService.update(tag);
    return tag;
  }

  @Post()
  async create(@Body() data: CreateTagDTO): Promise<TagEntity> {
    const tag: TagEntity = new TagEntity();
    tag.title = data.title.toLowerCase();
    tag.background_color = data.background_color;
    tag.text_color = data.text_color;

    const tagSaved: TagEntity = await this._tagService.create(tag);
    return tagSaved;
  }

  @Delete(':uuid')
  async delete(@Param() params: any): Promise<void> {
    const { uuid } = params;
    const tag: TagEntity = await this._tagService.findOne(uuid);
    if (!tag) {
      throw new HttpException('Tag não encontrada.', HttpStatus.NOT_FOUND);
    }

    await this._tagService.delete(tag);
  }
}
