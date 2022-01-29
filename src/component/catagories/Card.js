import React from 'react'
import { Div, Image, Para } from '../../styled-components/styles'

function Card(props){
    return(<Div wrap='wrap' margin='10px 0'>
    {props.data.map(dt=>(
        <Div direction='column' width='250px' margin='20px 40px' height='400px' >
        <Image height='200' width='200' fit='contain'  padding='20px' src={dt.img} alt={dt.product} />
        <Para font='14px' margin='5px' >{dt.product}</Para>
        <Para as='h6' font='11px' margin='5px' color='gray'>{dt.spec}</Para>
        <Div>
        <Div bgColor='green' padding='2px' aItems='center' margin='0 5px'>
            <Para color='white' font='12px'>{dt.rating}</Para>
            <Para color='white'  font='12px'><i class="fas fa-star"></i></Para>
        </Div>
            <Para as='h4' color='gray' margin='0 5px'>({dt.sale})</Para>
            <Image height='20px' width='80px' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' alt='assure' />
        </Div>
        <Div aItems='center' margin='10px 5px'>
            <Para as='h3' margin='0 10px 0 0'>₹{dt.price}</Para>
            <Para as='h3' color='gray' tDecoration='line-through'>₹{dt.strike}</Para>
            <Para as='h5' color='green' font='13px' margin='0 5px'>{dt.offer} Off</Para>
        </Div>

        </Div>
    ))}

    </Div>)
}

export default Card;