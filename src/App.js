import { useState } from "react"
import TaskList from "./components/TaskList"
import InputDisplay from "./components/InputDisplay"

const App = () => {
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState([])
    
    return (
        <div>
        <h1>my todo list</h1>
        <TaskList 
            tasks={tasks} 
            setTasks={setTasks} 
        />
        <InputDisplay 
            input={input} 
            setInput={setInput}
            tasks={tasks}
            setTasks={setTasks}
        />
        </div>
    )
}

export default App