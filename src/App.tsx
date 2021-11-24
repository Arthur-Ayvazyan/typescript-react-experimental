import React, {useState} from 'react';
import TodoList from "./components/TodoList/TodoList";
import NewTodo from "./components/NewTodo/NewTodo";


const App: React.FC = () => {

    const [tasks, setTask] = useState<{id: string, text:string}[]>([]);

    const handleAddTask = (inputValue: string) => {
        const text = inputValue;
        setTask( prevVal => [...prevVal, {id: (Math.random() * 100).toString(), text}]);
    };

    const handleDeleteTask = (id: string) => {
        const newTask = tasks.filter(todo => todo.id !== id);
        setTask(newTask);
    };

    return (
        <div className="App">
            <NewTodo addTask={handleAddTask}/>
            <TodoList tasks={tasks} deleteTask={handleDeleteTask}/>
        </div>
    );
}

export default App;
