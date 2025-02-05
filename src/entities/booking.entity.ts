import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Carpenter } from './carpenter.entity';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  slotTime: string;

  @ManyToOne(() => Carpenter, (carpenter) => carpenter.bookings)
  carpenter: Carpenter;
}
