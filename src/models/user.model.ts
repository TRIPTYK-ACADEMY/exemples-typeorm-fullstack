import { AfterLoad, BeforeInsert, BeforeRemove, BeforeUpdate, Column, Entity, OneToMany } from "typeorm";
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

    @AfterLoad()
    public afterTheLoad() {
        // console.log("j'ai été créé", this);
    }

    @BeforeInsert()
    @BeforeUpdate()
    @BeforeRemove()
    public beforeTheInsert() {
        this.firstName += " aime Amaury";
        console.log("Avant insertion : ", this);
    }

    /**
     * Propriété dite "virtuelle", car elle n'est pas en DB
     */
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
