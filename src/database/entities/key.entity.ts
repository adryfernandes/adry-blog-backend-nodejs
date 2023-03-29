import { Entity, PrimaryColumn } from 'typeorm';
import { Timestamp } from './extendigs/timestamp';
import { Column } from 'typeorm';

@Entity('keys')
export class KeyEntity {
  @PrimaryColumn()
  key: string;

  @Column(() => Timestamp, { prefix: false })
  times: Timestamp;
}
