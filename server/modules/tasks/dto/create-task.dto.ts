import { IsString, IsArray, IsNumber, IsDateString, IsDate, ValidateNested } from 'class-validator';

export class CreateTaskDto {
    @IsString() title: string;
    @IsString() description: string;
    @IsNumber() time: number;
    @IsDateString() date: string;
    @IsString() doneBy: string;
}
