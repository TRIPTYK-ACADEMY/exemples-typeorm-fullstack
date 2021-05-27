/* eslint-disable no-console */
import { createConnection, getCustomRepository, getRepository } from "typeorm";
import { Article } from "./models/article.model";
import { Category } from "./models/category.model";
import { User } from "./models/user.model";
import { ArticleRepository } from "./repositories/article.repository";

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
            entities: [Article, User, Category]
            // OU ./src/models/*.ts (si vous en avez bcp)
        });

        await getCustomRepository(ArticleRepository).exists(1);


        const newUser = getRepository(Category).create(
            {
                name : "La guerre des clones"
            }
        );

        try {
            await getRepository(Category).save(newUser);
        }catch(e) {
            console.log("Une erreur est survenue dans la sauvegarde : ", e);
        }

        // const users = await getRepository(User).find();

        console.log("Base de donnée connectée avec succès");
    } catch (e) {
        console.log("Une erreur est survenue : ", e);
    }
}

initApp();
