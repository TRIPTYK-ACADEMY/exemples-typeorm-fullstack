/* eslint-disable no-console */
import { createConnection } from "typeorm";

async function initApp() {
    try {
        const connexion = await createConnection({
            type: "mysql",
            username: "root",
            password: "test",
            host: "localhost",
            port: 3306,
            database: "fullstack_example",
            synchronize: true
        });

        // const result = await connexion.query("SHOW DATABASES;");
        // console.log(result);

        console.log("Base de donnée connectée avec succès");
    } catch (e) {
        console.log("Une erreur est survenue : ", e);
    }
}

initApp();
