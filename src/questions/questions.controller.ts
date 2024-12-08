import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dtos/create-questions.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Get()
  getQuestions() {
    return 'hi all';
  }

  @Get('/:id')
  getQuestionById(@Param('id') id: string) {
    return this.questionsService.findOne(id);
  }

  @Post()
  createQuestion(@Body() body: CreateQuestionDto) {
    return this.questionsService.create(body);
  }

  @Delete()
  deleteQuestions() {}
}
