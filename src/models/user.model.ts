import { Column, Entity, OneToMany } from "typeorm";
import { Article } from "./article.model";
import { BaseModel } from "./base.model";

@Entity()
export class User extends BaseModel {
    // par défaut, la longueur est de 255
    @Column("varchar", {
        nullable: false
    })
    public firstName!: string;

    @Column("varchar", {
        nullable: false
    })
    public lastName!: string;

    @OneToMany(() => Article, (article) => article.author)
    public articles?: Article[];
}
