import styled from 'styled-components'


const MCard = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
margin: 20px 10px;
border: 0.5px  solid #C0D8C0;
padding: 10px;
img{
    height: 300px;
    width: auto;
    margin: 10px 0;
    margin-left: 50px;
}
.spec{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 100px;
    ul{
        font-size: 15px;
        li{
            line-height: 30px;
        }
    }
    .rating{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: green;
        color: white;
        margin: 0 20px;
        padding: 5px;
        border-radius: 4px;
        h5{
            margin:0;
            font-size: 15px;
            font-weight: 200;
            margin-right: 5px;
        }
        span{
            color: white;
            font-size: 12px;

        }
    }
}
.price{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 100px;
    div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img{
        height: 20px;
        width: 80px;
        margin: 0 20px;
    }
    }
    h6,h5{
        margin: 5px 0;
        font-weight: 500;
        b{
            font-size: 15px;
        }
    }
}
`

export default MCard;