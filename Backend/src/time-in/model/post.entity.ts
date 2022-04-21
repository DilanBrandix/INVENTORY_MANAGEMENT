import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventory_in_time')
export class TimeInPostEntity {
  @PrimaryGeneratedColumn()
  no: number;

  @PrimaryColumn({ default: '' })
  tool_No: string;

  @Column({ default: '' })
  section: string;

  @Column({ default: '' })
  epf_No: string;

  @Column({ default: '' })
  employee_Name: string;

  @Column({ default: '' })
  date: Date;

  @Column({ default: '' })
  inv_in: string;

  @Column({ default: '' })
  shift: string;

  @Column({ default: '' })
  time_in: string;
}
