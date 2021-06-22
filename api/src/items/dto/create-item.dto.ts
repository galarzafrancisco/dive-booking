import { IsNumber, IsString, IsUrl } from "class-validator";

export class CreateItemDto {
    @IsString()
    name: string;

    @IsUrl()
    photo_url: string;

    @IsString()
    sizes: string;

    @IsNumber()
    rent_price: number;
}
