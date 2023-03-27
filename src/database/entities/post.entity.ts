import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from './extendigs/timestamp';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  content: string;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
