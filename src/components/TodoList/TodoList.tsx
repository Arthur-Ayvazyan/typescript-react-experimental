import React from 'react';

interface TodoListProps {
    tasks: { id: string, text: string }[];
    deleteTask: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = (props) => {

    return (
        <ol className="todoList">
            {
                props.tasks.map(({id, text}) => {
                    return (
                        <li key={id} className="todoItem">
                            <span className="todoText">{text}</span>
                            <button onClick={props.deleteTask.bind(null, id)}>delete</button>
                        </li>
                    )
                })
            }
        </ol>
    );
};

export default TodoList;