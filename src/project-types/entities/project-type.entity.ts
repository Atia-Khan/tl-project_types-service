

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



export type ProjectTypesDocument = ProjectType & Document;

@Schema({timestamps: true,collection: "tl_project_types"})
export class ProjectType {


  @Prop({ required: true })  
  name: string;


}


export const ProjectTypesSchema = SchemaFactory.createForClass(ProjectType);
