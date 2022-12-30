
const baseUrl = 'http://localhost:3030/jsonstore/todos';

const useTodos = () => {

    const removeTodo = (todoId) => {
        //returns a promise
      return  fetch(`${baseUrl}/${todoId}`, {
            method: 'DELETE',
        })
            .then(res => res.json())         
    }
    return{
        removeTodo
    }  
};

export default useTodos;