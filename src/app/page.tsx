// import Image from "next/image";
// import styles from "./page.module.css";

import AddTodo from "@/component/todo/AddTodo";


export default function Home() {
  return (
    <div className = "w-full py-20 flex justify-center flex-col items-center">
        <span className="text-4xl font-extrabold uppercase">To-Do App</span>
        {/* <h1 className="text-2xl font-extrabold uppercase m-5 text-center">
          <span className="lowercase">w/</span>Server Action
        </h1> */}

        <div className="flex py-5 justify-center flex-col items-center">
           <AddTodo />
        </div>
    </div>  
  );
}
