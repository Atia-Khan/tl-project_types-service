import { PartialType } from '@nestjs/mapped-types';
import { ProjectType } from './project-type.dto';

export class UpdateProjectTypeDto extends PartialType(ProjectType) {}
