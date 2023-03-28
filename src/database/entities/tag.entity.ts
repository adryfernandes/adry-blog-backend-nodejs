import { Timestamp } from './extendigs/timestamp';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tags')
export class TagEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true })
  title: string;

  @Column({ nullable: true })
  text_color: string;

  @Column({ nullable: true })
  background_color: string;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
