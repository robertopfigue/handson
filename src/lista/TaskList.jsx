import tasks from '../data/tasks'
import {Checkbox} from 'antd'

export default (props) => {
    const listTask = tasks.map(task => {return(<Checkbox key={task.id}>{task.descricao}</Checkbox>)})

    return(
        <div>
            <ul style={{listStyle: 'none'}}>
                {listTask}
            </ul>
        </div>
    )
}