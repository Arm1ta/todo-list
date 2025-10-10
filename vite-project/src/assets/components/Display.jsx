import { useState } from "react"
import Task from "./Task"
import './display.css'

function Display() {
    const [title, setTitle] = useState('')
    const [list, setList] = useState([])
    const [choose,setChoose] = useState('')
    
    const inputHandler = (e) => {
        let value = e.target.value
        setTitle(value)
    }
    const addButton = () => {
        if (title) {
            setList(prevList => [{
                id: Date.now(),
                title: title,
                status: 'Do',
                checked:false
            }, ...prevList]
            )
        } else {
            alert('write sth')
        }
        setTitle('')
        console.log(list);
        
    }
    return (
        <div className="continer">
            <div className="top-continer">
                <input type="text" onChange={inputHandler} value={title} className="text"/>
                <button onClick={addButton} className="add-btn">Add</button>
                <select name="" id="" onChange={(e)=>setChoose(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Do">Do</option>
                    <option value="Done">Done</option>
                </select>
            </div>
            <Task list={list} setList={setList} choose={choose} />
        
        </div>
    )
}
export default Display