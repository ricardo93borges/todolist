import styled from 'styled-components'

export const List = styled.ul`
    list-style:none;
    padding:0;
    text-align:center;
`
export const ListItem = styled.li`
    padding: 10px 5px;
    border-bottom:1px solid purple;
    color: purple;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};

    &:hover {
        background: purple;
        color: #FFF;
    }
`