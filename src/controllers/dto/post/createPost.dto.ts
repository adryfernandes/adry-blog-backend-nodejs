import { IsSigleTitle } from './../../../validations/isSingleTitle.validator';
import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreatePostDTO {
  @IsSigleTitle({ message: 'Esse título já existe.' })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  description: string;

  @IsNotEmpty({ message: 'O conteúdo é obrigatório.' })
  content: string;

  @IsArray()
  @IsOptional()
  tags: string[];
}
