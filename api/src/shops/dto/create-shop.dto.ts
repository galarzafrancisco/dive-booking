import { IsEmail, IsString, IsUrl } from "class-validator";

export class CreateShopDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;

    @IsEmail()
    email: string;

    @IsUrl()
    website: string;
}
