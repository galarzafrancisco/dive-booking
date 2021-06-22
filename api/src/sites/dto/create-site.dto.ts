import { IsNumber, IsString } from "class-validator";

export class CreateSiteDto {
    @IsString()
    location: string;

    @IsNumber()
    max_depth: number;

    @IsString()
    type: string;

    @IsString()
    name: string;

    @IsString()
    description: string;
}
