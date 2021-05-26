import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export async function updateEntityExample(id: number) {
    const userRepository = getRepository(User);

    const userFromId = await userRepository.findOne(id);

    if (userFromId) {
        userFromId.firstName = "Barack";
        userFromId.lastName = "Obama";

        await userRepository.save(userFromId);
    }
}

export async function updateEntityPreloadExample(id: number) {
    const userRepository = getRepository(User);

    const loadedAndMergedUser = await userRepository.preload({
        id, // findOne sur l'id en chargeant ses différentes relations si nécéssaire
        firstName: "Boba", // merge automatiquement les propriétés suivantes au résultat du findOne
        lastName: "Fête"
    });

    if (loadedAndMergedUser) {
        await userRepository.save(loadedAndMergedUser);
    }
}

export async function updateEntityRaw(id: number) {
    const userRepository = getRepository(User);

    // fais une UPDATE mysql, mais sans déclencher les méthodes magiques de TypeORM comme les triggers, les colonnes d'update automatiques etc ...
    const updatedUserInfos = await userRepository.update(id, {
        firstName: "Polo"
    });
    // ne renvoie pas l'objet , mais un résultat d'UPDATE

    console.log(updatedUserInfos);
}
