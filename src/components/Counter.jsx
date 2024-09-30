import { useTaskStore } from "../../Store/taskState"
import { useEffect , useState } from "react"
export default function Counter() {
    const {tasks} = useTaskStore()
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(0)
        tasks.map((task) =>{
    if(task.completed){
        setCount(prevCount => prevCount + 1)
        return ;
    }
   
})
    }, [tasks])
  return (
    <>
    <div className='p-5'>

 
    <div className='p-5 bg-red-500 rounded-full px-3 w-14 h-14 items-center text-center flex  justify-center'>
{count}
    </div>
    </div>
    </>
  )
}
