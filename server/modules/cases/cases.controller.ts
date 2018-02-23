import { Controller, Get, Post, Body, Query, Param, UseGuards } from '@nestjs/common';
import { CasesService } from './cases.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { AuthGuard } from '../../common/guards/auth.guard';


@Controller('cases')
export class CasesController {
    constructor(private readonly casesService: CasesService) { }

    @Post()
    async create(@Body() createCaseDto: CreateCaseDto) {
        return await this.casesService.createOrUpdate(createCaseDto);
    }

    @Get()
    async findAll() {
        return await this.casesService.getAllCases();
    }

    @Get('users/:userId')
    async findByUserId(@Param('userId') userId) {
        return await this.casesService.getUserCases(userId);
    }

    @Get('by-date')
    async findById(@Query('userId') userId, @Query('start') start, @Query('end') end) {
        return await this.casesService.getUserCasesByDate(userId, start, end);
    }

    @Get(':id')
    async findByDate(@Param('id') id) {
        return await this.casesService.getCaseById(id);
    }
}
