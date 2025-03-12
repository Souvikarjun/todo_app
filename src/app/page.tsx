// import Image from "next/image";
// import styles from "./page.module.css";

import AddTodo from "@/component/todo/AddTodo";


export default function Home() {
  return (
    <div className = "w-screen py-20 flex justify-center flex-col items-center">
        <span className="text-4xl font-extrabold uppercase">To-Do App</span>
        <h1 className="text-5xl font-extrabold uppercase mb-5 text-center">
          <span className="lowercase">w/</span>Server Action
        </h1>

        <div className="flex justify-center flex-col items-center">
           <AddTodo />
        </div>
    </div>  
  );
}
