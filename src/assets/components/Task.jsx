import { useState } from "react"
import trash from '../images/trash-bin.png'

const Task = ({title, count, unit,taskList, setTaskList, index}) => {

    


    let [checked, setChecked] = useState(false)
    let [checkboxClass,setChechboxClass] = useState('checkbox')
    let [taskClass, setTaskClass] = useState('task')

    function chechboxHandler() {
        if(checked===false) {
            setChechboxClass('checkbox checked')
            setChecked(true)
            setTaskClass('task task-complited')
        }
        else {
            setChechboxClass('checkbox')
            setChecked(false)
            setTaskClass('task')
        }
    }
    function deleteHandler(event) {
        let itemIndex = event.currentTarget.getAttribute('dataindex')
        let newList = taskList.filter((obj, index)=>{
            if(index!=itemIndex) {
                return true
            }
        })
        setTaskList(newList)
        localStorage.setItem('taskStorage', JSON.stringify(newList))
    }


    return (
        <div className={taskClass}>
            <div className="task-content-left">
                <div className={checkboxClass} onClick={chechboxHandler}></div>
                <div className="task-content-left-text">
                    <h1>{title}</h1>
                    <h2>{count} {unit}</h2>
                </div>
            </div>
            <div className="task-content-right">
                <div className="settings">
                    <img src={trash} alt="delete" onClick={deleteHandler} dataindex={index}/>
                </div>
            </div>
        </div>
    );
}
 
export default Task;