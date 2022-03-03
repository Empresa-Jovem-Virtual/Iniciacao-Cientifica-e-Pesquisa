import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  @Generated('uuid')
  uuid: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  age: number
}
