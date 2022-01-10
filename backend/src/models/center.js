import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany ,OneToOne ,JoinColumn, CreateDateColumn } from "typeorm";
import { adminCenter } from "./adminCenter";

@Entity()
export class center {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    name 

    @Column("varchar")
    city 

    @CreateDateColumn()
    createdAt = undefined;

    @OneToOne(() => adminCenter, admin => admin.center)
    @JoinColumn()
    adminCenter

}
