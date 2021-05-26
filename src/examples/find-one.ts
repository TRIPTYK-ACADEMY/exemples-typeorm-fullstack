import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export async function findOneExample() {
    // récupère le repo User
    const userRepository = getRepository(User);
    // va chercher automatiquement l'utilisateur avec l'id 1
    const user = await userRepository.findOne(1);

    if (user) {
        console.log(user);
        console.log(user.fullName);
    } else {
        throw new Error("USER NOT FOUND");
    }
}
