import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly TodoRepository: Repository<Todo>
  ) {}
  create(createTodoDto: CreateTodoDto) {
    return this.TodoRepository.save(createTodoDto);
  }

  findAll() {
    return this.TodoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.TodoRepository.update(id, updateTodoDto);
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
