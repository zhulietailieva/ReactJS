
const baseUrl = 'http://localhost:3030/jsonstore/todos';

const useTodos = () => {

    const removeTodo = (todoId) => {
        //returns a promise
        return fetch(`${baseUrl}/${todoId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }

    const createTodo = (title) => {
        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({ title, isCompleted: false })
        }).then(res => res.json());
    }

    const updateTodo = (todoId, data) => {
        return fetch(`${baseUrl}/${todoId}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        }).then(res => res.json());
    }

    return {
        removeTodo,
        createTodo,
        updateTodo
    }
};

export default useTodos;