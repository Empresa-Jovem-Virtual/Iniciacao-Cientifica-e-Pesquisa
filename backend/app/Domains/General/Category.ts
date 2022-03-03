import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  @Generated('uuid')
  uuid: string

  @Column()
  name: string

  @Column({ nullable: true })
  description: string
}
