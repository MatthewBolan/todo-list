import React, {useState} from 'react';

import './App.css';

import Task from "./components/Task";



function App() {

  const [newTask, setNewTask] = useState("");


  const [tasks, setTasks] = useState([]);


  const handleNewTaskSubmit = (event) => {

    event.preventDefault();

    if (newTask.length == 0) {

      return;

    }

    const taskObjective = {

      text: newTask,

      complete: false

    }

    setTasks([... tasks, taskObjective]);

    setNewTask("");

  }

  const handleTaskDelete = (deleteIndex) => {

    const filteredTasks = tasks.filter ((task, x) => {

      return x != deleteIndex;

    });

    setTasks(filteredTasks);

  }

  const handleCbox = (index) => {

    const updatedTasks = tasks.map((task, x) => {

      if (index == x ) {

        task.complete = !task.complete;

        // For RWA's 

        // const updatedTask = {... Task, complete: !task.complete};

        // return updatedTask;

      }

      return task;

    });

    setTasks(updatedTasks);

  }


  return (

    <div className="App">

    <form className="App-header" onSubmit = { (event) => {

      handleNewTaskSubmit(event);

    } }>

    <input className="Input-1"
    
    onChange = { (event) => {

      setNewTask(event.target.value)

    } }  
    
    type="text"
    
    value={newTask}

    />

    <div>

    <button className="Btn-1"> Add </button>

    </div>

<br></br>

    <div>

    {

tasks.map ((task, x) => {

  const taskClasses = [];

  if (task.complete) {

    taskClasses.push("Line-T")

  }

  return <Task key = {x} x={x} task={task} handleCbox={handleCbox} handleTaskDelete={handleTaskDelete} />;

} )

}

    </div>

    </form>



    </div>

  );

}

export default App;
