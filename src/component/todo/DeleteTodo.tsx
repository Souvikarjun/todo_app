import React from 'react'
import { todoProps } from '../types/types'
import Form from '../form/form'
import Input from '../input/input'
import Button from '../button/button'
import { FaTrash } from 'react-icons/fa'
import * as actions from "@/action"

const DeleteTodo = ({todo} : {todo:todoProps}) => {
  return (
    <Form action={actions.deleteTodo}>
        <Input type="hidden" name="inputId" value={todo.id}></Input>
        <Button type="submit" actionButton bgColor="bg-red-400" text = {<FaTrash/>}/>
    </Form>
  )
}

export default DeleteTodo