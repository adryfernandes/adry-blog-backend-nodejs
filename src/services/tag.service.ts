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

  async find(
    uuid: string,
    options?: FindManyOptions<TagEntity>,
  ): Promise<TagEntity> {
    return await this.tagRepository.findOne({ where: { uuid }, ...options });
  }

  async list(options?: FindManyOptions<TagEntity>): Promise<TagEntity[]> {
    return await this.tagRepository.find({ ...options });
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
