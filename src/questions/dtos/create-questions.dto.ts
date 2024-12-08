import { Optional } from '@nestjs/common';
import { IsString } from 'class-validator';

export class CreateQuestionDto {
  @Optional()
  difficulty: string;

  @IsString()
  question: string;

  @IsString()
  answer: string;
}
