import { create } from 'zustand'


// Define the initial store state
export const  useTaskStore = create((set) => ({
    tasks: [],// Initialize tasks as an empty array
    // Method to add a task
    addTask:(title) =>{
      set((state)=>{
        return{tasks:[...state.tasks,{id:Date.now(),title,completed:false}]}
      })
    },

    // Method to toggle the completed status of a task
   CheckTask:(id) =>{
set((state)=>{
    const updatedTasks=state.tasks.map((task)=>{
        return task.id==id ?{...task,completed:!task.completed}:task
    })
    return{tasks:updatedTasks}
})
   }

}))


