import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-wrap:${(props)=> props.wrap};
flex-direction: ${(props)=>props.direction? props.direction:'row'};
justify-content: ${(props)=>props.jContent? props.jContent:'flex-start'};
align-items: ${(props)=>props.aItems? props.aItems:'flex-start'};
width: ${(props)=>props.width};
height:${(props)=>props.height};
margin: ${(props)=>props.margin};
border-radius: ${(props)=>props.bRadius};
padding: ${(props)=>props.padding};
color:${(props)=>props.color? props.color:'initial'};
border-bottom: ${(props)=>props.bBottom};
background-color: ${(props)=>props.bgColor};
overflow:${(props)=> props.overflow};
text-overflow: ${(props)=> props.tOverflow};
white-space: ${(props)=> props.whiteSpace};
max-height: ${(props)=> props.maxH};
&:hover{
    ${(props)=> props.hover}
}
`
export default Div