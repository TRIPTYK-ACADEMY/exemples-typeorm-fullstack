import { getRepository } from "typeorm";
import { Article } from "../models/article.model";

export async function insertQBExample() {
    const newArticle = getRepository(Article).create({
        title: "fezjzlzel",
        content: "hezfizeoifzeo",
        author: { id: 5 }
    });

    const insertQueryBuilderResult = await getRepository(Article)
        .createQueryBuilder("article")
        .insert()
        .values(newArticle) // si on veut que les évènement bindés à notre modèle se déclenchent, alors nous devons passer une instance du modèle
        // .values({title : "fezjzlzel",content : "hezfizeoifzeo",author: { id : 5 }})
        .execute();
}