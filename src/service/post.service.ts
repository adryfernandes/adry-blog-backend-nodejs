import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Post } from '../interfaces/post.interface';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_REPOSITORY')
    private postRepository: Repository<Post>,
  ) {}

  private readonly posts: Post[] = [];

  async list(): Promise<Post[]> {
    return this.postRepository.find();
  }
}
