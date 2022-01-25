import styled from 'styled-components'

const HomeCard = styled.div`
display:  flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
font-family: inherit;
margin: 0 20px;
width: 500px;
height: 280px;
img{
    width: 150px;
    height: 120px;
    object-fit: contain;
    margin: 20px 0;
    &:hover{
        transform: scale(1.1);
    }
}
p{
    margin: 5px;
    font-size: 13px;
}
.product{
    margin-top: 10px;
    font-size: 15px;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.price{
    color: #388e3c;
}
.des{
    color: gray;
}

`
export default HomeCard