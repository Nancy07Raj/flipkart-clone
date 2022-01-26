import styled from 'styled-components'

const Para = styled.p`
margin: ${(props)=> props.margin? props.margin : '0'};
font-size: ${(props)=> props.font? props.font:'12px'};
white-space: ${(props)=> props.whiteSpace? props.whiteSpace: 'initial'};
text-overflow: ${(props)=> props.overflow? props.overflow:'initial'};
color: ${(props)=> props.color? props.color:'inherit'};
padding: ${(props)=> props.padding? props.padding: 'inherit'};
border-bottom: ${(props)=> props.bBottom? props.bBottom: 'inherit'};
width: ${(props)=> props.width? props.width: 'inherit'};
text-align: ${(props)=>props.align? props.align: 'inherit'};
font-weight: ${(props)=> props.weight? props.weight:'inherrit'}
`
export default Para