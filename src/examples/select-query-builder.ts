import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export async function selectQueryBuilderExample() {
    const queryBuilder = getRepository(User).createQueryBuilder("users");

    // dit au queryBuilder que c'est un queryBuilder de sélection (SELECT)
    const users = await queryBuilder
        .select([])
        .addSelect([
            "users.id",
            "users.updateDate",
            "user_articles.id",
            "users.deletionDate"
        ])
        .leftJoinAndSelect("users.articles", "user_articles")
        .where("user_articles.author = :id", {
            // :id sera remplacé par la clé de l'objet :id qu'on lui passe en paramètres
            id: 3
        })
        .orderBy("users.updateDate", "ASC")
        .getMany();

    for (const user of users) {
        console.log(
            `L'utilisateur ${user.fullName} a écrit`,
            user.articles?.map((e) => e.title).join(" ")
        );
    }


}