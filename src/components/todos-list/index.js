import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../reducers/todos/action-creators';
import * as filterActions from '../../reducers/visibility-filter/actions'
import { List, ListItem } from './style'

const TodoList = ({todos, activeFilter, handleToggleTodo}) => (
    <List>
        {getVisibleTodos(todos, activeFilter).map( (todo) => (
        <ListItem 
            key={todo.id} 
            onClick={handleToggleTodo(todo.id)}
            completed={todo.completed}>
            {todo.text}
        </ListItem>
        ))}
    </List>
)

const getVisibleTodos = (todos, activeFilter) => {
    return {
        [filterActions.SHOW_ALL] : todos,
        [filterActions.SHOW_COMPLETED] : todos.filter(todo => todo.completed),
        [filterActions.SHOW_ACTIVE] : todos.filter(todo => !todo.completed)
    }[activeFilter]
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
    handleToggleTodo: (id) => (e) => {
        dispatch(toggleTodo(id))
    }
})
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);