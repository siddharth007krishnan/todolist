import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export default (): TypeOrmModuleOptions => ({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'example',
  database: 'todo_test',
  synchronize: true,
})
