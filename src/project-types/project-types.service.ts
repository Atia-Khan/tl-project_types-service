// import { Injectable } from '@nestjs/common';
// import { CreateProjectTypeDto } from './dto/create-project-type.dto';
// import { UpdateProjectTypeDto } from './dto/update-project-type.dto';

// @Injectable()
// export class ProjectTypesService {
//   create(createProjectTypeDto: CreateProjectTypeDto) {
//     return 'This action adds a new projectType';
//   }

//   findAll() {
//     return `This action returns all projectTypes`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} projectType`;
//   }

//   update(id: number, updateProjectTypeDto: UpdateProjectTypeDto) {
//     return `This action updates a #${id} projectType`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} projectType`;
//   }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProjectType, ProjectTypesDocument } from '../project-types/entities/project-type.entity';

@Injectable()
export class ProjectTypesService {
  constructor(
    @InjectModel(ProjectType.name) private projectTypesModel: Model<ProjectTypesDocument>,
  ) {}

  // Create a new project type
  async create(name: string): Promise<ProjectType> {
    const newProjectType = new this.projectTypesModel({ name });
    return newProjectType.save();
  }

  // Get all project types
  async findAll(): Promise<ProjectType[]> {
    return this.projectTypesModel.find().exec();
  }

  // Get a single project type by ID
  async findById(id: string): Promise<ProjectType> {
    const projectType = await this.projectTypesModel.findById(id).exec();
    if (!projectType) {
      throw new NotFoundException(`Project Type with ID ${id} not found`);
    }
    return projectType;
  }

  // Update a project type by ID
  async update(id: string, name: string): Promise<ProjectType> {
    const updatedProjectType = await this.projectTypesModel
      .findByIdAndUpdate(id, { name, updated_at: new Date() }, { new: true })
      .exec();
    if (!updatedProjectType) {
      throw new NotFoundException(`Project Type with ID ${id} not found`);
    }
    return updatedProjectType;
  }

  // Delete a project type by ID
  async delete(id: string): Promise<void> {
    const result = await this.projectTypesModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Project Type with ID ${id} not found`);
    }
  }
}
