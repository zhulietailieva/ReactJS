import { useEffect, useState } from 'react';

import useFetch from './hooks/useFetch';
import useTodos from './hooks/useTodos';


import ListComponent from './components/ListComponent'
import CreateTask from './components/CreateTask';


function App() {
	const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
	const { removeTodo } = useTodos();

	const taskCreateHandler = (newTask) => {
		setTasks(state =>
			[...state,
			{
				_id: state[state.length - 1]._id + 1 || 1,
				title: newTask
			}
			]);
	}

	const taskDeleteHandler = async (taskId) => {
		const deletedTodo = await removeTodo(taskId);
		console.log(deletedTodo);
		setTasks(state => state.filter(x => x._id != taskId));
	}


	return (
		<div>

			<header>
				<h1>TODO App</h1>
			</header>

			<main>
				{isLoading ?
					<p>Loading...</p> :
					<ListComponent tasks={tasks} taskDeleteHandler={taskDeleteHandler} />
				}

				<CreateTask taskCreateHandler={taskCreateHandler} />
			</main>
		</div>
	);
}

export default App;
