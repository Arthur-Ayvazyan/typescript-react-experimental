import React, {useState} from "react";

interface toList {
    addTask: (inputValue: string) => void
}

const NewTodo: React.FC<toList> = (props) => {
    // const textInputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState('');

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        // const enteredText = textInputRef.current!.value;
        if (inputValue.trim().length) {
            props.addTask(inputValue);
            setInputValue('')
        }
    };

    const inputChangeHandler = (event: React.SyntheticEvent) => {
        let target = event.target as HTMLInputElement;
        setInputValue(target.value);
    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div>
                <br/>
                <label htmlFor="todo-text">Task Manager</label>
                <br/>
                <br/>
                <input onChange={inputChangeHandler} value={inputValue} type="text" id="todo-text" placeholder="...task"/>
            </div>
            <br/>
            <button type="submit">Create</button>
        </form>
    )
}

export default NewTodo;