import { Request } from '../../request/entities/request.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user!: string;

  @OneToMany(() => Request, (request) => request.student, {
    cascade: true,
    nullable: true,
    eager: true,
  })
  request?: Request[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
