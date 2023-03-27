import { PostEntity } from './../database/entities/post.entity';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from '../interfaces/post.interface';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<PostEntity>,
  ) {}

  private readonly posts: Post[] = [];

  async list(): Promise<PostEntity[]> {
    return await this.postRepository.find();
  }
}
