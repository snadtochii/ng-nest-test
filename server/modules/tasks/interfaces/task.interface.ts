import { Document } from 'mongoose';

export interface Task extends Document {
    readonly title: String;
    readonly description: String;
    readonly time: Number;
    readonly date: Date;
    readonly doneBy: String;
}
