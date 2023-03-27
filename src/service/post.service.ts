import { PostEntity } from './../database/entities/post.entity';
import { Inject, Injectable, Post } from '@nestjs/common';
import {
  FindManyOptions,
  FindOptionsWhere,
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

  async find(
    uuid: string,
    options?: FindManyOptions<PostEntity>,
  ): Promise<PostEntity> {
    return await this.postRepository.findOne({ where: { uuid }, ...options });
  }

  async list(options?: FindManyOptions<PostEntity>): Promise<PostEntity[]> {
    return await this.postRepository.find({ ...options });
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
