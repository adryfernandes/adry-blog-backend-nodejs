import { Paginate } from './../utils/paginate';
import {
  QueryParamsPaginate,
  PaginateResponse,
} from './../interfaces/paginate.interface';
import { PostEntity } from '../database/entities/post.entity';
import { Inject, Injectable } from '@nestjs/common';
import {
  FindManyOptions,
  Repository,
  SaveOptions,
  UpdateResult,
} from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<PostEntity>,
  ) {}

  async findOne(
    uuid: string,
    options?: FindManyOptions<PostEntity>,
  ): Promise<PostEntity> {
    return await this.postRepository.findOne({ where: { uuid }, ...options });
  }

  async list(
    params: QueryParamsPaginate,
    options?: FindManyOptions<PostEntity>,
  ): Promise<PaginateResponse> {
    const { initialPage, offset, order } = params;
    const paginate: Paginate = new Paginate(
      this.postRepository,
      initialPage,
      offset,
      order,
      options?.where,
    );

    return await paginate.byUpdatedAt();
  }

  async findByTitle(
    title: string,
    options?: FindManyOptions<PostEntity>,
  ): Promise<PostEntity> {
    return await this.postRepository.findOne({ where: { title }, ...options });
  }

  async create(post: PostEntity, options?: SaveOptions): Promise<PostEntity> {
    return await this.postRepository.save(post, { ...options });
  }

  async update(post: PostEntity): Promise<UpdateResult> {
    return await this.postRepository.update(post.uuid, post);
  }

  async delete(post: PostEntity): Promise<void> {
    await this.postRepository.softRemove(post);
  }
}
