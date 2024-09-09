// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ProjectTypesService } from './project-types.service';
// import { CreateProjectTypeDto } from './dto/create-project-type.dto';
// import { UpdateProjectTypeDto } from './dto/update-project-type.dto';

// @Controller('project-types')
// export class ProjectTypesController {
//   constructor(private readonly projectTypesService: ProjectTypesService) {}

//   @Post()
//   create(@Body() createProjectTypeDto: CreateProjectTypeDto) {
//     return this.projectTypesService.create(createProjectTypeDto);
//   }

//   @Get()
//   findAll() {
//     return this.projectTypesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.projectTypesService.findOne(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateProjectTypeDto: UpdateProjectTypeDto) {
//     return this.projectTypesService.update(+id, updateProjectTypeDto);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.projectTypesService.remove(+id);
//   }
// }


import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { ProjectTypesService } from './project-types.service';

@Controller('project-types')
export class ProjectTypesController {
  constructor(private readonly projectTypesService: ProjectTypesService) {}

 
  @Post('/add')
  async create(@Body('name') name: string) {
    return this.projectTypesService.create(name);
  }

 
  @Get('/get')
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
