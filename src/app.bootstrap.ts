import { createConnection } from "typeorm";

function initApp() {
    createConnection({
        type: "mysql",
        username: "root",
        password: "test",
        host: "localhost",
        port: 3306,
        database: "fullstack_example"
    });
}

initApp();
