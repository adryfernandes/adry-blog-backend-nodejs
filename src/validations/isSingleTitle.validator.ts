import { PostEntity } from './../database/entities/post.entity';
import { PostService } from './../services/post.service';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsSingleTitleValidator implements ValidatorConstraintInterface {
  constructor(private postService: PostService) {}

  async validate(value: any): Promise<boolean> {
    if (!value) return true;

    const postWithSameTitle: PostEntity = await this.postService.findByTitle(
      value?.toLowerCase(),
    );

    return !postWithSameTitle;
  }
}

export const IsSigleTitle = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: IsSingleTitleValidator,
    });
  };
};
