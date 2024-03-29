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

        console.log("Base de donnée connectée avec succès");
    } catch (e) {
        console.log("Une erreur est survenue : ", e);
    }
}

initApp();
