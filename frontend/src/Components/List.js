import React from 'react'
import './List.css'


const List = (props) => {
    return (
        <div className='list-item'>
            <div className='list-item_name'>{props.name}</div>
            <div className='list-item_city'>{props.closest}</div>
            <div className='list-item_temp'>{props.temp}</div>
        </div>
    )
}

export default List;
