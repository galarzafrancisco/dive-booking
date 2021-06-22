import { IsBoolean, IsNumber, IsUUID } from "class-validator";

export class CreateSubscriptionDto {
    @IsUUID()
    dive_id: string;

    @IsUUID()
    diver_id: string;

    @IsNumber()
    subscription_ts: number;

    @IsBoolean()
    paid: boolean;
}
