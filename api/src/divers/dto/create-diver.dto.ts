import { IsEmail, IsString } from "class-validator";

export class CreateDiverDto {
    @IsString()
    name_first: string;

    @IsString()
    name_last: string;

    @IsEmail()
    email: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;
}
