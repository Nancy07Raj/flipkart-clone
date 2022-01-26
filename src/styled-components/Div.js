import styled from 'styled-components'

const Div = styled.div`
display: flex;
flex-direction: ${(props)=>props.direction? props.direction:'row'};
justify-content: ${(props)=>props.jContent? props.jContent:'flex-start'};
align-items: ${(props)=>props.aItems? props.aItems:'flex-start'};
width: ${(props)=>props.width? props.width:'auto'};
height:${(props)=>props.direction? props.direction:'inherit'};
margin: ${(props)=>props.margin? props.margin:'0'};
border-radius: ${(props)=>props.bRadius? props.bRadius:'0'};
padding: ${(props)=>props.padding? props.padding:'0'};
color:${(props)=>props.color? props.color:'initial'};
border-bottom: ${(props)=>props.bBottom? props.bBottom:'initial'};
background-color: ${(props)=>props.bgColor? props.bgColor:'inherit'};

`
export default Div