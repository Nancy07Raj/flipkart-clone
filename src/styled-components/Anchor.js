import styled from "styled-components";

const Anchor= styled.a.attrs(props=>({
    href: props.href,
}))
`
font-size: ${(props)=> props.font? props.font: 'inherit'};
text-decoration: ${(props)=> props.textDecoration? props.textDecoration : 'inherit'};
margin: ${(props)=> props.margin? props.margin : 'inherit'};
color:${(props)=> props.color? props.color : 'inherit'};
&:hover{
    ${(props)=> props.hover? props.hover : 'inherit'};
}
`

export default Anchor