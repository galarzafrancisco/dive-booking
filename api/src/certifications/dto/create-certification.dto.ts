import { IsString } from "class-validator";

export class CreateCertificationDto {
    @IsString()
    name: string;
}
