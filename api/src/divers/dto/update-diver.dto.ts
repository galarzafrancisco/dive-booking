import { PartialType } from '@nestjs/mapped-types';
import { CreateDiverDto } from './create-diver.dto';

export class UpdateDiverDto extends PartialType(CreateDiverDto) {}
