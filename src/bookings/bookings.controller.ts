import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from '../entities/booking.entity';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  getAllBookings(): Promise<Booking[]> {
    return this.bookingsService.findAll();
  }

  @Post()
  createBooking(@Body() bookingData: Partial<Booking>): Promise<Booking> {
    return this.bookingsService.create(bookingData);
  }

  @Put(':id')
  updateBooking(
    @Param('id') id: number,
    @Body() updateData: Partial<Booking>,
  ): Promise<Booking> {
    return this.bookingsService.update(id, updateData);
  }

  @Delete(':id')
  deleteBooking(@Param('id') id: number): Promise<void> {
    return this.bookingsService.delete(id);
  }
}
