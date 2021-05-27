import { EntityRepository, Repository } from "typeorm";
import { Article } from "../models/article.model";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
    async exists(id: number) {
        const tableName = this.metadata.tableName;
        const articles = await this.query(
            `SELECT id FROM ${tableName} WHERE id=? LIMIT 1`,
            [id]
        );

        if (articles.length) {
            return true;
        }
        return false;
    }

    async findOne(...args: any[]) {
        console.log("Ololo");
        return super.findOne(...args);
    }
}