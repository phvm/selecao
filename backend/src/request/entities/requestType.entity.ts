import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Request } from './request.entity';

@Entity()
export class RequestType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @OneToMany(() => Request, (request) => request.requestType, {
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
