import { IsUUID } from "class-validator";

export class CreateGearRequiredListLineDto {
    @IsUUID()
    list_id: string;

    @IsUUID()
    item_id: string;
}
