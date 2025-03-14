"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formdata:FormData) {
    const input = formdata.get(`input`) as string;

    if (!input.trim()) {
        return;
    }

    await prisma.todo.create({

        data : {
            title: input,
        },
    });

    revalidatePath("/");

}