import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Todo } from './todo.entity'

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly _todoRepository: Repository<Todo>
  ) {}
  async create(todo: Partial<Todo>): Promise<Todo> {
    return this._todoRepository.save(todo)
  }
}
