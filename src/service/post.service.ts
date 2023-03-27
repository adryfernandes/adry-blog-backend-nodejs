import { PostEntity } from './../database/entities/post.entity';
import { Inject, Injectable } from '@nestjs/common';
import {
  FindManyOptions,
  FindOptionsWhere,
  Repository,
  SaveOptions,
} from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<PostEntity>,
  ) {}

  async get(options?: FindManyOptions<PostEntity>): Promise<PostEntity> {
    return await this.postRepository.findOne({ ...options });
  }

  async list(options?: FindManyOptions<PostEntity>): Promise<PostEntity[]> {
    return await this.postRepository.find({ ...options });
  }

  async create(post: PostEntity, options?: SaveOptions): Promise<PostEntity> {
    return await this.postRepository.save(post, { ...options });
  }

  async delete(post: PostEntity): Promise<void> {
    await this.postRepository.softRemove(post);
  }
}
