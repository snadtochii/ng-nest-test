import { Step } from './step.interface';
import { Document } from 'mongoose';

export interface Case extends Document {
    readonly caseId: string;
    readonly caseType: string;
    readonly steps: Step[];
}
