import { IsNumber, IsString, IsUUID } from "class-validator";

export class CreateDiveDto {
    @IsUUID()
    site_id: string;

    @IsNumber()
    date: number

    @IsUUID()
    gear_required_list_id: string;

    @IsUUID()
    cert_required_id: string;

    @IsUUID()
    shop_id: string;

    @IsString()
    meeting_address: string;
}
