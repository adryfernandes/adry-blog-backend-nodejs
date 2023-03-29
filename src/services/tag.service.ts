import { Paginate } from './../utils/paginate';
import { PostEntity } from './../database/entities/post.entity';
import {
  QueryParamsPaginate,
  PaginateResponse,
} from './../interfaces/paginate.interface';
import { TagEntity } from './../database/entities/tag.entity';
import { Inject, Injectable } from '@nestjs/common';
import {
  FindManyOptions,
  Repository,
  SaveOptions,
  UpdateResult,
} from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @Inject('TAG_REPOSITORY')
    private tagRepository: Repository<TagEntity>,
  ) {}

  async findOne(
    uuid: string,
    options?: FindManyOptions<TagEntity>,
  ): Promise<TagEntity> {
    return await this.tagRepository.findOne({ where: { uuid }, ...options });
  }

  async findByTitle(
    title: string,
    options?: FindManyOptions<TagEntity>,
  ): Promise<TagEntity> {
    return await this.tagRepository.findOne({ where: { title }, ...options });
  }

  async list(
    params: QueryParamsPaginate,
    options?: FindManyOptions<PostEntity>,
  ): Promise<PaginateResponse> {
    const { initialPage, offset, order } = params;
    const paginate: Paginate = new Paginate(
      this.tagRepository,
      initialPage,
      offset,
      order,
      options?.where,
    );

    return await paginate.byUpdatedAt();
  }

  async create(post: TagEntity, options?: SaveOptions): Promise<TagEntity> {
    return await this.tagRepository.save(post, { ...options });
  }

  async update(post: TagEntity): Promise<UpdateResult> {
    return await this.tagRepository.update(post.uuid, post);
  }

  async delete(post: TagEntity): Promise<void> {
    await this.tagRepository.softRemove(post);
  }
}
