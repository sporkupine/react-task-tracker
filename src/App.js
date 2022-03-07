import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "March 19th at 11:30am",
      reminder: true,
    },
    {
      id: 2,
      text: "Staff Meeting",
      day: "March 21st at 9:30am",
      reminder: true,
    },
    {
      id: 3,
      text: "Tee Time",
      day: "March 27th at 12:00pm",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
