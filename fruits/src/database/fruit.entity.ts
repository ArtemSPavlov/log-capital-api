import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fruits')
export class Fruit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('int')
  quantity: number;

  @Column()
  color: string;

  @Column()
  country_of_origin: string;

  @Column('float')
  price: number;
}
