import { Controller, Get, Post, Body, Query, Param, Put, Delete } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';


@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) { }

    @Post()
    async create(@Body() createTaskDto: CreateTaskDto) {
        return await this.tasksService.addTask(createTaskDto);
    }

    @Get()
    async findAll() {
        return await this.tasksService.getAllTasks();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return await this.tasksService.getTaskById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() createTaskDto: CreateTaskDto) {
        return await this.tasksService.editTask(id, createTaskDto);
    }

    @Delete(':id')
    async findByDate(@Param('id') id: string) {
        return await this.tasksService.deleteTask(id);
    }
}
