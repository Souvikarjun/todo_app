import Form from "../form/form"
import Input from "../input/input"
import Button from "../button/button"
import * as action from "@/action"
import { todoProps } from "../types/types"
import { FaCheck } from "react-icons/fa"


const ChangeTodo = ({ todo } : {todo : todoProps}) => {
  return (
    <Form action={action.changeStatus}>
        <Input name="inputId" value={todo.id} type="hidden"></Input>
        <Button text={<FaCheck />} type = "submit" actionButton bgColor={todo.isCompleted ? "bg-green-400" : "bg-blue-500"}></Button>
    </Form>
  )
}

export default ChangeTodo