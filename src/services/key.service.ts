import { KeyEntity } from './../database/entities/key.entity';
import { Inject, Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class KeyService {
  constructor(
    @Inject('KEY_REPOSITORY')
    private keyRepository: Repository<KeyEntity>,
  ) {}

  async findOne(
    key: string,
    options?: FindManyOptions<KeyEntity>,
  ): Promise<KeyEntity> {
    return await this.keyRepository.findOne({
      where: { x_api_key: key },
      ...options,
    });
  }

  async delete(key: KeyEntity): Promise<void> {
    await this.keyRepository.softRemove(key);
  }
}
