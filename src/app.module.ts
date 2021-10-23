import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import typeOrmConfig from './config/typeormconfiguration'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      autoLoadEntities: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
