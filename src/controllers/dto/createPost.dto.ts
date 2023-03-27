import { IsNotEmpty } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @IsNotEmpty({ message: 'A descrição é obrigatória.' })
  description: string;

  @IsNotEmpty({ message: 'O conteúdo é obrigatório.' })
  content: string;
}
