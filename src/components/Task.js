const Task = (props) => {

    const taskClasses = [];

if (props.task.complete) {

    taskClasses.push("Line-T")

}

    return (

    <div>

    

<br></br>

    <input onChange= { (event) => {

    props.handleCbox(props.x);

    } } checked = {props.task.complete} type="checkbox" />

    <span className = { taskClasses.join(" ") }> {props.task.text} </span>

    <button className="Btn-2"
    
    onClick = { (event) => {

    props.handleTaskDelete(props.x);

    } } >Delete</button>

</div> 

);

};

export default Task;