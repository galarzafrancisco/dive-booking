import { PartialType } from '@nestjs/mapped-types';
import { CreateGearRequiredListLineDto } from './create-gear-required-list-line.dto';

export class UpdateGearRequiredListLineDto extends PartialType(CreateGearRequiredListLineDto) {}
