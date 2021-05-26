import { getRepository } from "typeorm";
import { User } from "../models/user.model";

export async function removeExample(id: number) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (user) {
        await userRepository.remove(user);
    }
}

export async function removeExampleSoft(id: number) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(id);

    if (user) {
        await userRepository.softRemove(user);
    }
}

export async function deleteExample(id: number) {
    const userRepository = getRepository(User);

    await userRepository.delete([1, 2, 3, 4]);
}

export async function deleteSoftExample(id: number) {
    const userRepository = getRepository(User);

    await userRepository.softDelete([1, 2, 3, 4]);
}
