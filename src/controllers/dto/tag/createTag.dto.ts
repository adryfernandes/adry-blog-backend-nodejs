import { IsNotEmpty, IsOptional } from 'class-validator';
import { IsSigleTag } from '../../../validations/isSingleTag.validator';

export class CreateTagDTO {
  @IsSigleTag({ message: 'Essa tag já existe.' })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @IsOptional()
  text_color: string;

  @IsOptional()
  background_color: string;
}
