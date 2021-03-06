import React from 'react'
import classNames from 'classnames'

const TodoItem = ({ todo, onClick, onDestroy }) => (
  <li
    className={classNames('todo-item', {
      completed: todo.completed,
    })}
  >
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onClick={onClick}
        checked={todo.completed}
        readOnly
      />
      <label htmlFor="todo-item">{ todo.title }</label>
      <button className="destroy" onClick={() => { onDestroy(todo.id) }} />
    </div>
  </li>
)

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onDestroy: React.PropTypes.func.isRequired,
}

export default TodoItem
