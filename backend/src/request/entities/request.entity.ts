import { Sector } from '../../sector/entities/sector.entity';
import { Student } from '../../student/entities/student.entity';
import { RequestType } from './requestType.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  text!: string;

  @Column({ default: false })
  isClosed!: boolean;

  @ManyToOne(() => RequestType, (requestType) => requestType.request)
  @JoinColumn({ name: 'requestTypeId' })
  requestType!: RequestType;

  @ManyToOne(() => Sector, (sector) => sector.request)
  @JoinColumn({ name: 'sectorId' })
  sector: Sector;

  @ManyToOne(() => Student, (student) => student.request)
  @JoinColumn({ name: 'studentId' })
  student: Student;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
