"use client";


import { useState } from "react";
import Button from "../button/button";
import { MdEdit } from "react-icons/md";
import Form from "../form/form";
import Input from "../input/input";
import { todoProps } from "../types/types";
import * as action from "@/action"

const EditTodo = ({todo} : {todo : todoProps}) => {
    const [editTodoState, setEditTodoState] = useState(false);
    
    const handleEdit = () =>{
        if (todo.isCompleted) {
            return;
        }
        setEditTodoState(!editTodoState); 
    }
    
    const handleSubmit = () => {
        setEditTodoState(false);
    }

    return (
    <div className=" flex gap-5 item-center">
        <Button onClick={handleEdit} text={<MdEdit/>} actionButton bgColor=""/>
        {editTodoState ? (
            <Form action={action.editToto} onSubmit={handleSubmit}>

                <Input name = "inputId" value={todo.id} type="hidden"></Input> 
                <Input name = "newTitle" placeholder="Edit todo..." type ="text" ></Input> 
                <Button type="submit" text="Save" bgColor=""/>
            </Form>
        ): null
            
        }

    </div>
  )
}

export default EditTodo