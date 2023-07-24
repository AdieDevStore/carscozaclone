import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { CreateDateColumn, UpdateDateColumn } from "typeorm" 

export enum UserRole {
    ADMIN = 'admin', 
    DEALER = 'dealer',
    REGULAR = 'regular',
    GHOST = 'ghost'
}


@Entity()
export class User {

    @PrimaryGeneratedColumn({type: 'int'})
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column({
        type: 'enum', 
        enum: UserRole,
        default: UserRole.GHOST
    })
    userRole: UserRole

    @CreateDateColumn({name: "created_at", type: 'timestamp', nullable: false})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at',  type: 'timestamp', nullable: true})
    updatedAt: Date
    
    @Column({default: false})
    isActive: boolean
}

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    lineOne: string

    @Column()
    lineTwo: string 

    @Column()
    city: string

    @Column()
    province: string

    @Column({
        nullable: false,
    })
    postcode: number

    @CreateDateColumn({name: "created_at", type: 'timestamp', nullable: false})
    createdAt: Date

    @UpdateDateColumn({name: 'updated_at',  type: 'timestamp', nullable: true})
    updatedAt: Date
}
