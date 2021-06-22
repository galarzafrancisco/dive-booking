import { IsString, IsUUID } from "class-validator";

export class CreatePackingListDto {
    @IsUUID()
    subscription_id: string;

    @IsUUID()
    item_id: string;

    @IsString()
    size: string;

    @IsString()
    note: string;
}
