import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
 @PrimaryGeneratedColumn()
 id: number;

 @Column()
 title: string;

 @Column()
 body: string;

 @Column({
  default: false
 })
 done: boolean;
}