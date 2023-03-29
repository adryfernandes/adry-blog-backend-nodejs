import { KeyEntity } from './../database/entities/key.entity';
import { KeyService } from './../services/key.service';
import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request, NextFunction } from 'express';

@Injectable()
export class AuthorizationMiddleware implements NestMiddleware {
  constructor(private _keyService: KeyService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authorization: string = req.headers['x-api-key'] as string;
    if (!authorization) {
      throw new HttpException('Ação não autorizada.', HttpStatus.UNAUTHORIZED);
    }

    const key: KeyEntity = await this._keyService.findOne(authorization);
    if (!key) {
      throw new HttpException('Ação não autorizada.', HttpStatus.UNAUTHORIZED);
    }
    next();
  }
}
