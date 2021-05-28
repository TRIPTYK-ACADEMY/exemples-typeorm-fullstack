import { getRepository } from "typeorm";
import { Article } from "../models/article.model";

export async function relationQueryBuilder() {
    const queryBuilder = await getRepository(Article)
        .createQueryBuilder("article")
        .relation("categories")
        .of({ id: 2 })
        .add(3);
}