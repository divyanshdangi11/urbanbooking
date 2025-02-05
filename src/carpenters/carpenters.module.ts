import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarpentersController } from './carpenters.controller';
import { CarpentersService } from './carpenters.service';
import { Carpenter } from '../entities/carpenter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carpenter])],
  controllers: [CarpentersController],
  providers: [CarpentersService],
})
export class CarpentersModule {}
