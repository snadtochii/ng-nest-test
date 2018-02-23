import { IsString, IsDateString, IsBoolean } from 'class-validator';

export class CreateUserDto {
    @IsString() email: string;
    @IsBoolean() email_verified: boolean;
    @IsString() name: string;
    @IsString() nickname: string;
    @IsString() picture: string;
    @IsString() sub: string;
    @IsDateString() updated_at: string;
}
