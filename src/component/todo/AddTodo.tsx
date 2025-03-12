import Input from '../input/input'
import Button from '../button/button'
import Form from '../form/form'

export default function AddTodo() {
  return (
    <div>
        <Form>
            <div>
                <Input name='input'  type = "text" placeholder='Add Todo Here' />
                <Button type="submit" text="Add" bgColor = "" />
            </div>        
        </Form>
    </div>
  )
}
