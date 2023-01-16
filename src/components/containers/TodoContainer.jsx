import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList'

const filterTodos = (todoList, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todoList

        case 'SHOW_ACTIVE':
            return todoList.filter((todo) => !todo.completed)

        case 'SHOW_COMPLETED':
            return todoList.filter((todo) => todo.completed)

        default:
            return todoList
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) =>  {
            dispatch(toggleTodo(id))
        }
    }
}

const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoContainer