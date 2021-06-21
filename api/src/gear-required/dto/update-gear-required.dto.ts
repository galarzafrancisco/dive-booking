import { PartialType } from '@nestjs/mapped-types';
import { CreateGearRequiredDto } from './create-gear-required.dto';

export class UpdateGearRequiredDto extends PartialType(CreateGearRequiredDto) {}
