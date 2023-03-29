import { Injectable } from '@nestjs/common';
import { validateHexadecimalCode } from './../utils/validators';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsHexadecimalCodeValitador
  implements ValidatorConstraintInterface
{
  validate(value: any): boolean | Promise<boolean> {
    if (!value) return true;

    return validateHexadecimalCode(value);
  }
}

export const IsHexadecimalValid = (options: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: options,
      constraints: [],
      validator: IsHexadecimalCodeValitador,
    });
  };
};
