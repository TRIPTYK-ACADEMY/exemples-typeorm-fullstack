import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { Category } from "./category.model";
import { User } from "./user.model";

@Entity() // je mon entité
export class Article extends BaseModel {
    @Column("varchar", {
        nullable: false,
        length: 64
    })
    public title!: string;

    @Column("text", {
        nullable: false
    })
    public content!: string;

    @ManyToOne(() => User, (user) => user.articles, {
        nullable: false
    })
    public author!: User;

    @BeforeInsert()
    @BeforeUpdate()
    public feojkzeireopz() {
        console.log("i pass");
    }

    @ManyToMany(() => Category, (category) => category.articles)
    public categories?: Category[];
}
