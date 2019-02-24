import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../reducers/todos/action-creators';
import { StyledForm, Input, Button } from './style'

const Form = ({handleAddTodo}) => (
    <StyledForm onSubmit={handleAddTodo} >
        <Input type='text' name='todo' />
        <Button type='submit'>ADD</Button>
    </StyledForm>
)

const mapDispatchToProps = (dispatch) => ({
    handleAddTodo: (e) => {
        e.preventDefault()
        dispatch(addTodo(e.target.todo.value))
        e.target.todo.value = ''
    }  
})
  
export default connect(null, mapDispatchToProps)(Form);