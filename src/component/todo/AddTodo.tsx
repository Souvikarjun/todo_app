import Input from '../input/input'
import Button from '../button/button'
import Form from '../form/form'
import * as action from '@/action'

export default function AddTodo() {
  return (
    <div>
        <Form action = {action.createTodo}>
            <div className='flex'>
                <Input name='input'  type = "text" placeholder='Add Todo Here' />
                <Button type="submit" text="Add" bgColor = "bg-blue-600" />
            </div>        
        </Form>
    </div>
  )
}
