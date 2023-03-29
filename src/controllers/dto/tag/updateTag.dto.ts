import { IsOptional } from 'class-validator';

export class UpdateTagDTO {
  @IsOptional()
  title: string;

  @IsOptional()
  text_color: string;

  @IsOptional()
  background_color: string;
}
