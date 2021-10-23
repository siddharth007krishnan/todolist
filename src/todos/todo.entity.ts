import { CANCELLED } from 'dns'
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { COMPLETED, IN_PROGRESS, TODO } from './constants'

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('longtext')
  description: string

  @Column({
    type: 'enum',
    name: 'status',
    enum: [TODO, IN_PROGRESS, CANCELLED, COMPLETED],
  })
  status: string

  @Column('datetime')
  startDate: Date

  @Column('datetime')
  dueDate: Date

  @Column('timestamp')
  createdAt

  @Column('timestamp')
  updatedAt

  @Column('timestamp')
  deletedAt

  userId: string
}
