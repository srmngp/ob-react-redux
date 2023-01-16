import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, id, completed, text}) => {
    const style = {
        textDecoration: completed ? 'line-trought' : 'none',
        textDecorationColor: completed ? 'green' : 'none',
        color: completed ? 'green' : 'white'
    }

    return (
        <li onClick={onClick} style={style}>
            {id} - {text}
        </li>
    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo
