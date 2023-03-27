import { IsNotEmpty } from 'class-validator';
import { IsSigleTitlePost } from '../validations/IsSigleTitlePost.validator';

export class CreatePostDTO {
  @IsSigleTitlePost({ message: 'Esse título já existe.' })
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  description: string;

  @IsNotEmpty({ message: 'O conteúdo é obrigatório.' })
  content: string;
}
