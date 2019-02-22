import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../reducers/visibility-filter/actions'
import { setVisibilityFilter } from '../../reducers/visibility-filter/action-creators'

const Filter = ({activeFilter, handleFilter}) => (
    <div>
        <h3>Show</h3>
        {filterItems.map( item => {
            if(item.action === activeFilter){
                return <span 
                    key={item.action} 
                    style={{marginRight:10}}>{item.label}</span>
            }
            return <a href='#' 
                    key={item.action} 
                    onClick={handleFilter(item.action)}
                    style={{marginRight:10}}>{item.label}</a>
        })}
    </div>
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