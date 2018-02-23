import { IsString, IsArray, IsNumber, IsDateString, IsDate, ValidateNested } from 'class-validator';
import { Step } from '../interfaces/step.interface';

export class CreateCaseDto {
    @IsString() caseId: string;
    @IsString() caseType: string;
    @ValidateNested() steps: StepDto[];
}

export class StepDto {
    @IsString() step: string;
    @IsNumber() time: number;
    @IsString() role: string;
    @IsString() brand: string;
    @IsDateString() date: string;
    @IsString() doneBy: string;
}
