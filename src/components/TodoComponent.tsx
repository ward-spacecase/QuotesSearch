import { useState } from "react";

let ID_COUNT = 0;

interface Todo {
    id: number;
    description: string;
    completed: boolean;
}

export const TodoComponent = () => {
    const [todos, setTodos] = useState<Todo[]>([]);     // State array with type Todo, defined in the interface above
    const [description, setDescription] = useState("");     // for the description input
    
    const saveTodo = () => {
        if(description === "") return;
        const todo: Todo = {
            id: ID_COUNT++,
            description,        // short hand
            completed: false
        }
        setTodos([...todos, todo]);     // can't modify STATE, only replace STATE
    };

    const toggleTodo = (todo: Todo) => {
        const index = todos.indexOf(todo);
    }

    return(
        <div>
            <div>
                <input 
                type="text"
                value={description}
                placeholder="What do you need to do?!"
                onChange={e => setDescription(e.target.value)}
                />
                <button onClick={saveTodo}>Save</button>
            </div>
            <div>
                {
                    todos.map((todo) => (
                        <div key={todo.id}> {/* all data objects should have unique ids */}
                            <input type="checkbox"/> {todo.description}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}