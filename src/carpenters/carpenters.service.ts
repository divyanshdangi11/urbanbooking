import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Carpenter } from '../entities/carpenter.entity';

@Injectable()
export class CarpentersService {
  constructor(
    @InjectRepository(Carpenter)
    private readonly carpentersRepository: Repository<Carpenter>,
  ) {}

  // Find all carpenters
  findAll(): Promise<Carpenter[]> {
    return this.carpentersRepository.find();
  }

  // Create a new carpenter
  create(carpenterData: Partial<Carpenter>): Promise<Carpenter> {
    const carpenter = this.carpentersRepository.create(carpenterData);
    return this.carpentersRepository.save(carpenter);
  }

  // Update an existing carpenter
  async update(id: number, updateData: Partial<Carpenter>): Promise<Carpenter> {
    await this.carpentersRepository.update(id, updateData);
    const updatedCarpenter = await this.carpentersRepository.findOne({ where: { id } });
    if (!updatedCarpenter) {
      throw new Error(`Carpenter with ID ${id} not found`);
    }
    return updatedCarpenter;
  }

  // Delete a carpenter by ID
  async delete(id: number): Promise<void> {
    const result = await this.carpentersRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Carpenter with ID ${id} not found`);
    }
  }
}
