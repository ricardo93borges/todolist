import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/visibility-filter/actions'
import { setVisibilityFilter } from '../../reducers/visibility-filter/action-creators'
import FilterLink from './filter-link'
import { StyledFilter } from './style'

const Filter = ({activeFilter, handleFilter}) => (
    <StyledFilter>
        {filterItems.map( item => {
            return <FilterLink 
                    key={item.action} 
                    action={item.action}
                    activeFilter={activeFilter}
                    onClick={handleFilter(item.action)}>
                        {item.label}
                    </FilterLink>                    
        })}
    </StyledFilter>
)

const filterItems = [
    {label: 'All', action: actions.SHOW_ALL},
    {label: 'Done', action: actions.SHOW_COMPLETED},
    {label: 'To Do', action: actions.SHOW_ACTIVE}
]

const mapStateToProps = (state) => ({
    activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
    handleFilter: (filter) => (e) => {
        e.preventDefault()
        dispatch(setVisibilityFilter(filter))
    }
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Filter);