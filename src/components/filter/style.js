import styled from 'styled-components'

export const StyledFilter = styled.div`
    padding:10px;
    text-align:center;
`

export const Link = styled.a`
    padding:5px 10px;
    background:purple;
    color:#FFF;
    text-decoration:none;
    border-right: 1px solid #FFF;

    &:hover {
        background: indigo;
    }
`

export const Span = styled(Link)`
    background:none;
    color:purple;

    &:hover {
        background: #FFF;
    }
`