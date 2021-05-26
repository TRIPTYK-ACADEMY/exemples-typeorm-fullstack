import { getRepository, LessThan } from "typeorm";
import { User } from "../models/user.model";

export async function findAllExample() {
    const userRepository = getRepository(User /*"default"*/);

    const user = await userRepository.find({
        where: {
            // WHERE id < 10
            id: LessThan(10)
        },
        select: ["firstName", "lastName", "id"], // sélectionne uniquement le nom + prénom
        order: {
            // trie par id en Ascendant
            id: "ASC"
        },
        relations: ["articles"] // va faire un left join sur la relation articles
    });

    console.table(user); // => c'est cool pour voir les tableaux
}
