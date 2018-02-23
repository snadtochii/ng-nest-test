import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './task.schema';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])],
    components: [TasksService],
    controllers: [TasksController]
})
export class TasksModule { }
