// import { readFile, writeFile }

import { readFile, writeFile } from 'fs/promises';
import { CreateQuestionDto } from './dtos/create-questions.dto';

export class QuestionsService {
  async findOne(id: string): Promise<any> {
    const contents = JSON.parse(await readFile('questions.json', 'utf-8'));
    return contents[id];
  }

  async findAll(): Promise<any> {
    const contents = JSON.parse(await readFile('questions.json', 'utf-8'));
    return contents;
  }

  async create(data: CreateQuestionDto): Promise<void> {
    const contents = JSON.parse(await readFile('questions.json', 'utf-8'));
    const id = Math.floor(Date.now() + Math.random());
    contents[id] = { id, ...data };
    await writeFile('questions.json', JSON.stringify(contents));
  }
}
