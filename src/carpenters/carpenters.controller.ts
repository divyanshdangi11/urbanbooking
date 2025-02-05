import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CarpentersService } from './carpenters.service';
import { Carpenter } from '../entities/carpenter.entity';

@Controller('carpenters')
export class CarpentersController {
  constructor(private readonly carpentersService: CarpentersService) {}

  @Get()
  getAllCarpenters(): Promise<Carpenter[]> {
    return this.carpentersService.findAll();
  }

  @Post()
  createCarpenter(@Body() carpenterData: Partial<Carpenter>): Promise<Carpenter> {
    return this.carpentersService.create(carpenterData);
  }

  @Put(':id')
  updateCarpenter(
    @Param('id') id: number,
    @Body() updateData: Partial<Carpenter>,
  ): Promise<Carpenter> {
    return this.carpentersService.update(id, updateData);
  }

  @Delete(':id')
  deleteCarpenter(@Param('id') id: number): Promise<void> {
    return this.carpentersService.delete(id);
  }
}
