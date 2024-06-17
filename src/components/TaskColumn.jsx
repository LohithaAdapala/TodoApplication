import React from 'react';
import './TaskColumn.css';
import TaskCard from './TaskCard';
import DropArea from './DropArea';

const TaskColumn = ({ name, icon, tasks, status, handleDelete, setActiveCard, onDrop }) => {
  return (
    <section className='task_column'>
      <h2 className='task_column_heading'>
        <img src={icon} alt="" className='task_column_icon' />
        {name}
      </h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map((task, index) => (
        task.status === status && (
          <React.Fragment key={index}>
            <TaskCard
              name={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
              setActiveCard={setActiveCard}
            />
            <DropArea onDrop={() => onDrop(status, index + 1)} />
          </React.Fragment>
        )
      ))}
    </section>
  );
};

export default TaskColumn;
