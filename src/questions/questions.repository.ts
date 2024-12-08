import { readFile, writeFile } from 'fs/promises';

export class QuestionsRepository {
  async findOne(id: string): Promise<any> {
    const contents = JSON.parse(await readFile('questions.json', 'utf-8'));
    return contents[id];
  }

  async findAll(): Promise<any> {
    const contents = JSON.parse(await readFile('questions.json', 'utf-8'));
    return contents;
  }

  async create(data: any): Promise<void> {
    const contents = JSON.parse(await readFile('questions.json', 'utf-8'));
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    contents[id] = { id, question: data.question, answer: data.answer };
    await writeFile('questions.json', JSON.stringify(contents));
  }
}
