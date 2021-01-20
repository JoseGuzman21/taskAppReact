import React from 'react';

// props = son los datos que se le da desde fuera
export const TaskRow = (props) => (
    <tr key={props.task.name} >
        <td> {props.task.name} </td>
        <td> <input
            type="checkbox"
            checked={props.task.done}
            onChange={() => props.toggleTask(props.task)
            } />
        </td>
    </tr>
);