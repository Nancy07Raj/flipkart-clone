import styled from "styled-components";

const CatagoriesCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-height: 200px;
max-width: 200px;
margin: 0 28px;
margin-top: 10px;
a{
    text-decoration: none;
    color: black;
    &:hover{
        color: blue;
    }
}
img{
    height: 70px;
    width: 70px;
    object-fit: cover;
}
h3{
    margin-top:5px;
    font-size: 15px;
    font-weight: 600;
}
`
export default CatagoriesCard