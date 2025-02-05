import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from '../entities/booking.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingsRepository: Repository<Booking>,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingsRepository.find({ relations: ['carpenter'] });
  }

  create(bookingData: Partial<Booking>): Promise<Booking> {
    const booking = this.bookingsRepository.create(bookingData);
    return this.bookingsRepository.save(booking);
  }

  async update(id: number, updateData: Partial<Booking>): Promise<Booking> {
    await this.bookingsRepository.update(id, updateData);
    const updatedBooking = await this.bookingsRepository.findOne({
      where: { id },
      relations: ['carpenter'],
    });
    if (!updatedBooking) {
      throw new Error(`Booking with ID ${id} not found`);
    }
    return updatedBooking;
  }

  async delete(id: number): Promise<void> {
    const result = await this.bookingsRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Booking with ID ${id} not found`);
    }
  }
}
