import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { Booking } from '../entities/booking.entity';
import { Carpenter } from '../entities/carpenter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Carpenter])],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
