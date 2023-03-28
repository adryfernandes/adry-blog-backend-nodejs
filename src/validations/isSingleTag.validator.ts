import { TagService } from 'src/services/tag.service';
import { TagEntity } from 'src/database/entities/tag.entity';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsSingleTagValidator implements ValidatorConstraintInterface {
  constructor(private tagService: TagService) {}

  async validate(value: any): Promise<boolean> {
    if (!value) return true;

    const tagWithSameTitle: TagEntity = await this.tagService.findByTitle(
      value?.toLowerCase(),
    );

    return !tagWithSameTitle;
  }
}

export const IsSigleTag = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: IsSingleTagValidator,
    });
  };
};
