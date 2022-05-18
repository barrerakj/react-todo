import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }
    
    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    
    
    return (
        <form
            onSubmit={onSubmit}
        >
            <label>Add a Todo</label>
            <textarea 
                placeholder='Please enter any task pending'
                value={newTodoValue}
                onChange={onWrite}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={ onCancel }
                >
                    Cancel
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm }