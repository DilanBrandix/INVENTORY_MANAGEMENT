import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('inventory_details')
export class FeedPostEntity {
  @PrimaryColumn({ default: '' })
  no: number;

  @Column({ default: '' })
  tool_No: string;

  @Column({ default: '' })
  tool_Name: string;

  @Column({ default: '' })
  epf_No: string;

  @Column({ default: '' })
  employee_Name: string;

  @Column({ default: '' })
  section: string;

  @Column({ default: '' })
  assign_date: Date;
}
