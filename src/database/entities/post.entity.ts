import { TagEntity } from '../../database/entities/tag.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Timestamp } from './extendigs/timestamp';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ unique: true })
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  content: string;

  @ManyToMany(() => TagEntity, { cascade: true })
  @JoinTable({
    name: 'post_tags',
    joinColumn: { name: 'post_uuid' },
    inverseJoinColumn: { name: 'tag_uuid' },
  })
  tags: TagEntity[];

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
