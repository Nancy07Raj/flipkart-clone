import styled from 'styled-components'

export const Ul = styled.ul`
font-size: ${(props)=>props.font? props.font:'inherit'};
list-style-type:${(props)=>props.lstyle? props.lstyle:'none'}
`

export const Li = styled.li`
line-height: ${(props)=> props.LH? props.LH: '0'};
`
