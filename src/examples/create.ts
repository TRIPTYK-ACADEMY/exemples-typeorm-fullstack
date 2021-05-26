import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export async function createExample(firstName: string, lastName: string) {
    const userRepository = getRepository(User);
    /*
        const newUser = userRepository.create({
            firstName,
            lastName
        });
        C'est kiff kiff
    */
    const newUser = new User();
    newUser.firstName = firstName;
    newUser.lastName = lastName;

    console.log("Avant newUser", newUser);

    await userRepository.save(newUser);

    console.log("Après newUser", newUser);
}
