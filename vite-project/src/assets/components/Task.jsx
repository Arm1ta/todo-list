import './task.css'

function Task({ list, setList, choose }) {
    const deletTask = (id) => {
        setList(prevList => {
            return prevList.filter(item => item.id !== id)
        })
        console.log(list);
        
    }
    const checkedTask = (id) => {
        setList(prevList => {
            return (
                prevList.map(item => {
                    if (item.id === id) {
                        let checked = !item.checked
                        let status = checked?'Done':'Do'
                        return (
                            {
                                ...item,
                                checked,
                                status
                            }
                        )
                    } else {
                        return item
                    }
               })  
           )
        })
    }

    return (
        <>
            {
                list
                    .filter(item => choose === '' || choose === item.status || choose === 'All')
                    .map(item => {
                        return (
                            <div className='task' key={item.id}>
                                <div>
                                    <div className={item.checked?'blue':'circle'}  onClick={()=>checkedTask(item.id)}></div>
                                    <p className={item.checked ? 'checked-text' : ''}>{item.title}</p>
                                </div>
                                <button onClick={()=>deletTask(item.id)} className='del-btn'>delete</button>
                            </div>  
                        )
                    }
                )
            }
        </>
    )
}
export default Task