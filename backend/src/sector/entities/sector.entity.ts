import { Request } from '../../request/entities/request.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OneToMany } from 'typeorm';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Request, (request) => request.sector, {
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
