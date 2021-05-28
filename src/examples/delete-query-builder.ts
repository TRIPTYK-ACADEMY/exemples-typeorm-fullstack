import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export async function deleteQb() {
    const users = await getRepository(User)
        .createQueryBuilder("user")
        .delete()
        .where("user.id = 11")
        .execute();
}