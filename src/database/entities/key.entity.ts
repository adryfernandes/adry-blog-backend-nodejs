import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Timestamp } from './extendigs/timestamp';
import { Column } from 'typeorm';

@Entity('keys')
export class KeyEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  x_api_key: string;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
