import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CaseSchema } from './case.schema';
import { CasesService } from './cases.service';
import { CasesController } from './cases.controller';


@Module({
    imports: [MongooseModule.forFeature([{ name: 'Case', schema: CaseSchema }])],
    components: [CasesService],
    controllers: [CasesController]
})
export class CasesModule { }
