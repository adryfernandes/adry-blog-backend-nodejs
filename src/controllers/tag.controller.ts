import { CreateTagDTO } from './dto/tag/createTag.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagEntity } from 'src/database/entities/tag.entity';
import { TagService } from 'src/services/tag.service';

@Controller('tag')
export class TagController {
  constructor(private _tagService: TagService) {}

  @Get('list')
  async list(): Promise<TagEntity[]> {
    return await this._tagService.list();
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
}
