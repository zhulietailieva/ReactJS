import { TaskContext } from './contexts/TaskContext';

import { useEffect, useState } from 'react';

import useFetch from './hooks/useFetch';
import useTodos from './hooks/useTodos';


import ListComponent from './components/ListComponent'
import CreateTask from './components/CreateTask';


function App() {
	const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
	const { removeTodo, createTodo } = useTodos();

	const taskCreateHandler = async (newTask) => {
		const createdTask = await createTodo(newTask);

		setTasks(state =>
			[...state,
			{
				_id: state[state.length - 1]._id + 1 || 1,
				title: newTask
			}
			]);
	};

	const taskDeleteHandler = async (taskId) => {
		await removeTodo(taskId);
		setTasks(state => state.filter(x => x._id != taskId));
	};

	const toggleTask = async (taskId) => {
		setTasks(state => state.map(x=>x._id == taskId ? { ...x, isCompleted: !x.isCompleted } : x))
	}

	return (
		<TaskContext.Provider value={{ taskDeleteHandler, toggleTask }}>
			<div>

				<header>
					<h1>TODO App</h1>
				</header>

				<main>
					{isLoading ?
						<p>Loading...</p> :
						<ListComponent tasks={tasks} />
					}

					<CreateTask taskCreateHandler={taskCreateHandler} />
				</main>
			</div>
		</TaskContext.Provider>
	);
}

export default App;
