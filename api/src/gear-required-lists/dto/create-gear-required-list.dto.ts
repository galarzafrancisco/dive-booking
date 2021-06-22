import { IsString } from "class-validator";

export class CreateGearRequiredListDto {
    @IsString()
    name: string;

    @IsString()
    description: string;
}
