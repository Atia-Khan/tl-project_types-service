import { Module } from '@nestjs/common';
import { ProjectTypesService } from './project-types.service';
import { ProjectTypesController } from './project-types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectType, ProjectTypesSchema } from '../project-types/entities/project-type.entity';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: ProjectType.name, schema: ProjectTypesSchema }]),  

  ],
  controllers: [ProjectTypesController],
  providers: [ProjectTypesService],
})
export class ProjectTypesModule {}
