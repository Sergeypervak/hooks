import {CustomContext} from '../Context'
import React, {useContext} from 'react'

export function Book(props) {
   const {removeBook} = useContext(CustomContext)
    
    return <h2 onClick={() => removeBook(props.id)}>{props.title}</h2>
}