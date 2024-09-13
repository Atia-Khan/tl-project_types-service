

import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProjectTypesService } from './project-types.service';

@Controller('project-types')
export class ProjectTypesController {
  constructor(private readonly projectTypesService: ProjectTypesService) {}

 
  @Post()
  async create(@Body('name') name: string) {
    return this.projectTypesService.create(name);
  }

 
  @Get()
  async findAll() {
    return this.projectTypesService.findAll();
  }

  
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.projectTypesService.findById(id);
  }

  
  @Put(':id')
  async update(@Param('id') id: string, @Body('name') name: string) {
    return this.projectTypesService.update(id, name);
  }


  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.projectTypesService.delete(id);
  }
}
