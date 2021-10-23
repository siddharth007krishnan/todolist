import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export default (): TypeOrmModuleOptions => ({
  type: 'mariadb',
  host: process.env.MARIADB_HOST,
  port: parseInt(process.env.MARIADB_PORT),
  username: process.env.MARIADB_USERNAME,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  synchronize: false,
})
