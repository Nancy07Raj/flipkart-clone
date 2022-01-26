import styled from "styled-components";

const Image = styled.img.attrs(props=>({
    src : props.src,
    alt : props.alt,
}))
`
height: ${(props)=> props.height? props.height: '50px'};
width: ${(props)=> props.width? props.width: 'initial'};
object-fit: ${(props)=>props.fit? props.fit:'contain'};
margin: ${(props)=> props.margin? props.margin:'0'};
&:hover{
    ${(props)=> props.hover? props.hover : 'none'};
}
`
export default Image