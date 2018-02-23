import { Component } from '@nestjs/common';
import { Task } from './interfaces/task.interface';
import { TaskSchema } from './task.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskDto } from './dto/create-task.dto';

@Component()
export class TasksService {
    constructor(@InjectModel(TaskSchema) private readonly taskModel: Model<Task>) { }


    async getAllTasks() {
        return await this.taskModel.find();
    }

    async getTaskById(id: string) {
        return await this.taskModel.findById(id);
    }

    async addTask(createTaskDto: CreateTaskDto) {
        const task = new this.taskModel(createTaskDto);
        return await task.save();
    }

    async editTask(id: string, createTaskDto: CreateTaskDto) {
        return await this.taskModel.findByIdAndUpdate(id, createTaskDto, { new: true });
    }

    async deleteTask(id: string) {
        return await this.taskModel.findByIdAndRemove(id);
    }
}
