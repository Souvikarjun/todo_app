"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
// import { FormatDetection } from "next/dist/lib/metadata/types/extra-types";

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


export async function changeStatus(formData:FormData) {
    const inputId = formData.get("inputId") as string;
    const todo = await prisma.todo.findUnique({
        where:{
            id: inputId
        }
    })
    const updateStatus = !todo?.isCompleted

    await prisma.todo.update({
        where : {
            id: inputId
        },
        data:{
            isCompleted : updateStatus
        },
    });

    revalidatePath("/");
}

export async function editToto(formdata:FormData) {
    const input = formdata.get("newTitle") as string;
    const inputId = formdata.get("inputId") as string;
    
    await prisma.todo.update({
        where:{
            id: inputId
        },
        data: {
            title : input,
        },
    });

    revalidatePath("/");
}


export async function deleteTodo(formData:FormData) {
    const inputId = formData.get("inputId") as string;

    await prisma.todo.delete({
        where : {
            id : inputId
        },
    });
    
    revalidatePath("/")
}