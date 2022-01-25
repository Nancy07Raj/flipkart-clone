import styled from "styled-components";

const FashionCard = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
width: 250px;
margin: 20px;
padding: 5px;
border: 1px solid white;
&:hover{
    border: 1px solid #C0D8C0;
}
.fashionImg{
    height: 250px;
    width: 250px;
}
.catagory{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 10px;
    p{
    margin: 5px;
    margin-left: 0;
    overflow: hidden;
    font-size: 14px;
    font-weight: 500;
}
img{
    height: 30px;
    width: 50px;
    margin-left: 80px;
}
}
h5{
    margin: 5px ;
    margin-left: 10px;
}
.price{
    margin-left: 10px;
    font-weight: 600;
    span{
        margin: 0 10px;
    }
}


`
export default FashionCard