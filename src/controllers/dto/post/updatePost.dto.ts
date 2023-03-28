import { IsOptional } from 'class-validator';

export class UpdatePostDTO {
  @IsOptional()
  title: string;

  @IsOptional()
  description: string;

  @IsOptional()
  content: string;
}
