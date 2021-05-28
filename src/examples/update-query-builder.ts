import { getRepository } from "typeorm";
import { Article } from "../models/article.model";

export async function QBUpdate() {
    const updateQB = getRepository(Article).createQueryBuilder(
        "article"
    );

    const article = (await getRepository(Article).findOne(5))!;

    await updateQB
        .update(article)
        .set({
            title: "BADAMTSUM"
        })
        .execute();
}