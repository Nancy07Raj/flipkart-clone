import styled from "styled-components";

const Image = styled.img.attrs(props=>({
    src : props.src,
    alt : props.alt,
    height: props.height,
    width: props.width,
    size: props.size
}))
`
object-fit: ${(props)=>props.fit};
padding: ${(props)=> props.padding};
margin: ${(props)=> props.margin};
&:hover{
    ${(props)=> props.hover? props.hover : 'none'};
}
`
export default Image