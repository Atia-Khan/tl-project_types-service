import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProjectTypesModule } from './project-types/project-types.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ProjectTypesModule,  

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
