import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTagDTO {
  @IsNotEmpty({ message: 'O título é obrigatório.' })
  title: string;

  @IsOptional()
  text_color: string;

  @IsOptional()
  background_color: string;
}
