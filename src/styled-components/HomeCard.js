import styled from 'styled-components'

const HomeCard = styled.div`
display:  flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: inherit;
margin: 0 20px;
width: 400px;

img{
    width: 165px;
    height: 100px;
}
p{
    margin: 0;
}
.name{
    font-size: 14px;
}
.price{
    color: #388e3c;
}
.des{
    color: gray;
}

`
export default HomeCard