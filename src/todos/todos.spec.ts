import { ConfigModule } from '@nestjs/config'
import { Test } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { randomUUID } from 'crypto'
import typeOrmTestConfiguration from '../config/typeOrmTestConfiguration'
import { Todo } from './todo.entity'
import { TodosService } from './todos.service'

describe('TodoService', () => {
  let todosService: TodosService
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
          ...typeOrmTestConfiguration(),
          entities: [Todo],
        }),
        TypeOrmModule.forFeature([Todo]),
      ],
      providers: [TodosService],
    }).compile()
    todosService = moduleRef.get<TodosService>(TodosService)
  })

  afterEach((done) => done())
  describe('create()', () => {
    it('should create a new todo item for a given user', async () => {
      const sampleTodo = {
        name: 'Learn nest js',
        description: 'To better understand nest js',
        status: 'TODO',
        startDate: new Date(),
        dueDate: new Date('01/11/2021'),
        userId: randomUUID(),
      }
      const todo = await todosService.create(sampleTodo)
      expect(todo.name).toBe(sampleTodo.name)
      expect(todo.description).toBe(sampleTodo.description)
      expect(todo.status).toBe(sampleTodo.status)
      expect(todo.startDate).toBe(sampleTodo.startDate)
      expect(todo.dueDate).toBe(sampleTodo.dueDate)
    })
  })
})
