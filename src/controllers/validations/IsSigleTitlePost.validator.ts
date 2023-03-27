import { PostEntity } from './../../database/entities/post.entity';
import { PostService } from './../../service/post.service';
import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsSigleTitlePostValidator implements ValidatorConstraintInterface {
  constructor(private postRepository: PostService) {}

  async validate(value: any): Promise<boolean> {
    if (!value) return true;

    const postWithSameTitle: PostEntity | null = await this.postRepository.get({
      where: { title: value.toLowerCase() },
    });

    return !postWithSameTitle;
  }
}

export const IsSigleTitlePost = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: IsSigleTitlePostValidator,
    });
  };
};
