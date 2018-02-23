import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { CasesModule } from './modules/cases/cases.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './modules/tasks/tasks.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mean'),
    CasesModule,
    TasksModule,
    UsersModule
  ],
})
export class ApplicationModule {}
