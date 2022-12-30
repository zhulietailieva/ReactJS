import TaskItem from "./TaskItem";

const ListComponent = ({
    tasks,
    taskDeleteHandler
}) => {
    return (
        <ul>
            {tasks.map(x => 
                <TaskItem 
                    key={x._id} 
                    title={x.title} 
                    taskDeleteHandler={taskDeleteHandler}
                    taskId={x._id}>
                </TaskItem>
            )}
        </ul>
    );
};

export default ListComponent;