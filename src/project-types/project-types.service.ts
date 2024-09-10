import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectType, ProjectTypesDocument } from '../project-types/entities/project-type.entity';

@Injectable()
export class ProjectTypesService {
  constructor(
    @InjectModel(ProjectType.name) private projectTypesModel: Model<ProjectTypesDocument>,
  ) {}

 
  async create(name: string): Promise<ProjectType> {
    const newProjectType = new this.projectTypesModel({ name });
    return newProjectType.save();
  }

  
  async findAll(): Promise<ProjectType[]> {
    return this.projectTypesModel.find().exec();
  }

  
  async findById(id: string): Promise<ProjectType> {
    const projectType = await this.projectTypesModel.findById(id).exec();
    if (!projectType) {
      throw new NotFoundException(`Project Type with ID ${id} not found`);
    }
    return projectType;
  }


  async update(id: string, name: string): Promise<ProjectType> {
    const updatedProjectType = await this.projectTypesModel
      .findByIdAndUpdate(id, { name, updated_at: new Date() }, { new: true })
      .exec();
    if (!updatedProjectType) {
      throw new NotFoundException(`Project Type with ID ${id} not found`);
    }
    return updatedProjectType;
  }

  
  async delete(id: string): Promise<void> {
    const result = await this.projectTypesModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Project Type with ID ${id} not found`);
    }
  }
}
