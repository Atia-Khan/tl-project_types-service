

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export type ProjectTypesDocument = ProjectType & Document;

@Schema()
export class ProjectType {
  @Prop({ type: String, default: uuidv4 })  
  id: string;

  @Prop({ required: true })  
  name: string;

  @Prop({ default: Date.now }) 
  created_at: Date;

  @Prop({ default: Date.now })  
  updated_at: Date;
}


export const ProjectTypesSchema = SchemaFactory.createForClass(ProjectType);
