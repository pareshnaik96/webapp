import React from 'react'
import './List.css'


const List = (props) => {
    return (
        <div className='list-item'>
            <div className='list-item_name'>Name: {props.name}</div>
            <div className='list-item_closest'>Closest Value: {props.closest}</div>
            <div className='list-item_temp'>Temperature: {props.temp}</div>
        </div>
    )
}

export default List;
