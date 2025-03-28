// import Image from "next/image";
// import styles from "./page.module.css";

import AddTodo from "@/component/todo/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/component/todo/todo";

async function getdata() {
  const data = await prisma.todo.findMany({
    select : {
      title: true,
      id : true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return data;
}


export default async function Home() {
  const data = await getdata() 
  return (
    <div className = "w-screen py-20 flex justify-center flex-col items-center">
        <span className="text-4xl font-extrabold uppercase">To-Do App</span>
        {/* <h1 className="text-2xl font-extrabold uppercase m-5 text-center">
          <span className="lowercase">w/</span>Server Action
        </h1> */}

        <div className="flex py-5 justify-center flex-col items-center">
           <AddTodo />
           <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-screen">
              {data.map((todo,id) => (
                <div key={id} className="w-full">
                  <Todo todo={todo}/>
                </div>
              ))}
           </div>
        </div>
    </div>  
  );
}
