import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Param, Delete } from '@nestjs/common/decorators';
import { KeyEntity } from './../database/entities/key.entity';
import { KeyService } from './../services/key.service';

@Controller('key')
export class KeyController {
  constructor(private _keyService: KeyService) {}

  @Get(':uuid')
  async get(@Param() params: any): Promise<KeyEntity> {
    const { uuid } = params;

    const key: KeyEntity = await this._keyService.findOne(uuid);
    if (!key) {
      throw new HttpException('Chave não encontrada.', HttpStatus.NOT_FOUND);
    }

    return key;
  }

  @Delete(':uuid')
  async delete(@Param() params: any): Promise<void> {
    const { uuid } = params;

    const key: KeyEntity = await this._keyService.findOne(uuid);
    if (!key) {
      throw new HttpException('Chave não encontrada.', HttpStatus.NOT_FOUND);
    }

    await this._keyService.delete(key);
  }
}
