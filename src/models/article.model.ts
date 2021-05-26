import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // je mon entité
export class Article {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column("varchar", {
        nullable: false,
        length: 64
    })
    public title!: string;
}
