import React from 'react'
import { Link, Span } from './style'

const FilterLink = ({action, activeFilter, children, onClick}) => {
    if (action === activeFilter){
        return <Span>{ children }</Span>
    }else{
        return (
            <Link href='#' onClick={onClick}>
                {children}
            </Link>
        )
    }
}
  
export default FilterLink