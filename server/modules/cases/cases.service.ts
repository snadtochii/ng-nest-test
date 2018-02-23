import { Component } from '@nestjs/common';
import { Case } from './interfaces/case.interface';
import { CaseSchema } from './case.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCaseDto } from './dto/create-case.dto';

@Component()
export class CasesService {
    constructor(@InjectModel(CaseSchema) private readonly caseModel: Model<Case>) { }

    getAllCases = async () => {
        const cases = await this.caseModel.findOne({}).exec();
        console.log(cases);
        if (cases) {
            return cases;
        } else {
            throw new Error('Something went wrong');
        }
    }

    async getUserCases(userId: string) {
        const cases = await this.caseModel.find({ 'steps.doneBy': userId });
        const userSteps = cases.map(el => {
            const steps = el.steps.filter(step => step.doneBy === userId);
            return { id: el._id, caseId: el.caseId, caseType: el.caseType, steps };
        });
        if (userSteps) {
            return userSteps;
        } else {
            throw new Error('Steps not found for this user');
        }
    }

    async getUserCasesByDate(userId: string, startDate: string, endDate: string) {
        let userSteps;
        console.log(userId, new Date(parseInt(startDate, 10)), new Date(parseInt(endDate, 10)));
        if (startDate && endDate) {
            const cases = await this.caseModel.find({
                'steps.doneBy': userId,
                'steps.date': { '$gte': new Date(parseInt(startDate, 10)), '$lte': new Date(parseInt(endDate, 10)) }
            });
            userSteps = cases.map(el => {
                const steps = el.steps.filter(step =>
                    step.doneBy === userId
                    && new Date(step.date) >= new Date(parseInt(startDate, 10))
                    && new Date(step.date) <= new Date(parseInt(endDate, 10)));
                return { _id: el._id, caseId: el.caseId, caseType: el.caseType, steps };
            });
        }

        if (userSteps) {
            return userSteps;
        } else {
            throw new Error('Steps not found');
        }
    }

    async getCaseById(_id): Promise<Case> {
        const createdCase = await this.caseModel.findOne({ _id }).exec();
        if (createdCase) {
            return createdCase;
        } else {
            throw new Error('Case not found');
        }
    }

    async createOrUpdate(createCaseDto: CreateCaseDto): Promise<Case> {

        const savedCase = await this.caseModel.findOne({ caseId: createCaseDto.caseId }).exec();

        if (savedCase) {
            savedCase.steps.push(...createCaseDto.steps);
            return await savedCase.save();
        } else {
            const newCase = new this.caseModel({ createCaseDto });
            return await newCase.save();
        }
    }
}
