import { PartialType } from '@nestjs/mapped-types';
import { CreateGearRequiredListDto } from './create-gear-required-list.dto';

export class UpdateGearRequiredListDto extends PartialType(CreateGearRequiredListDto) {}
