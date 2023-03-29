import { IsHexadecimalValid } from './../../../validations/isHexadecimalCode.validator';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { IsSigleTag } from '../../../validations/isSingleTag.validator';

export class CreateTagDTO {
  @IsSigleTag({ message: 'Essa tag já existe.' })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @IsHexadecimalValid({ message: 'A cor do texto deve ser em hexadecimal.' })
  @IsOptional()
  text_color: string;

  @IsHexadecimalValid({ message: 'A cor de fundo deve ser em hexadecimal.' })
  @IsOptional()
  background_color: string;
}
