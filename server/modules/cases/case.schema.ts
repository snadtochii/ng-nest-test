import * as mongoose from 'mongoose';

export const CaseSchema = new mongoose.Schema({
    caseId: String,
    caseType: String,
    steps: [{
        step: String,
        time: Number,
        role: String,
        brand: String,
        date: String,
        doneBy: String,
    }]
});
