import { useEffect, useState } from 'react';

import useFetch from './hooks/useFetch';


import ListComponent from './components/ListComponent'
import CreateTask from './components/CreateTask';


function App() {
	const [tasks, setTasks] = useFetch('http://localhost:3030/jsonstore/todos',[]);
	
	const taskCreateHandler = (newTask) => {
		setTasks(state =>
			[...state,
			{
				_id: state[state.length - 1]._id + 1 || 1,
				title: newTask
			}
			]);
	}

	const taskDeleteHandler = (taskId) => {
		setTasks(state => state.filter(x => x._id != taskId))
	}


	return (
		<div>

			<header>
				<h1>TODO App</h1>
			</header>

			<main>
				<ListComponent tasks={tasks} taskDeleteHandler={taskDeleteHandler} />

				<CreateTask taskCreateHandler={taskCreateHandler} />
			</main>
		</div>
	);
}

export default App;
