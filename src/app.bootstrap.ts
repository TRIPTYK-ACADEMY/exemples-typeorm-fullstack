/* eslint-disable no-console */
import { createConnection, getRepository } from "typeorm";
import { UserSubscriber } from "./listeners/user.listener";
import { Article } from "./models/article.model";
import { Category } from "./models/category.model";
import { User } from "./models/user.model";

async function initApp() {
    try {
        const connexion = await createConnection({
            type: "mysql",
            username: "root",
            password: "test",
            host: "localhost",
            port: 3306,
            name: "default",
            database: "fullstack_example",
            synchronize: true,
            entities: [Article, User, Category],
            subscribers : [UserSubscriber]
            // OU ./src/models/*.ts (si vous en avez bcp)
        });

        const queryBuilder = getRepository(User).createQueryBuilder("users");
        // dit au queryBuilder que c'est un queryBuilder de sélection (SELECT)
        const users = queryBuilder
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
            .orderBy("users.updateDate", "ASC");
        
        users.printSql();


        // for (const user of users) {
        //     console.log(`L'utilisateur ${user.fullName} a écrit`, user.articles?.map((e) => e.title).join(" "));
        // }


            
        // const users = await getRepository(User).find();

        console.log("Base de donnée connectée avec succès");
    } catch (e) {
        console.log("Une erreur est survenue : ", e);
    }
}

initApp();
