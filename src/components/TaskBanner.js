import React from 'react';

export const TaskBanner = props => (
    <h4 className="bg-primary text-white tet-center p-4">
        {props.userName}'s Task App ({props.taskItems.filter(t => !t.done).length} tasks to do)
    </h4>
)