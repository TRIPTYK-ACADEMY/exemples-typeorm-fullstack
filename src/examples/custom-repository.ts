import { getCustomRepository } from "typeorm";
import { ArticleRepository } from "../repositories/article.repository";

export async function getCustomRepositoryExample() {
     await getCustomRepository(ArticleRepository).exists(1);
}