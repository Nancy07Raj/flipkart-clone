import React from 'react'
import {HomeCard} from '../../styled-components/styles'

function Deal(){
    const data = [
        {
            img:'https://rukminim1.flixcart.com/image/300/300/kmwcuq80/shoe/w/u/s/7-444-gry-org-bruton-orange-original-imagfp7fzz5ftzfc.jpeg?q=70',
            product:'Sparx,Burton & more',
            price:'From 199 + Extra 10% Off',
            des:'Causal Shoes For mens'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/kwwfte80/watch/i/q/n/a-black-designer-watch-with-king-bracelet-daniel-jubile-boys-original-imag9h5jdcf6ajmz.jpeg?q=70',
            product:'Casio, Fossil, Titan Watches',
            price:'Upto  75% Off + Extra 5%',
            des:'Best Offers on Watches'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/ksgehzk0/shirt/7/y/6/m-bos21amcwsh8247195-abof-original-imag6ykfdpv4hm2s.jpeg?q=70',
            product:'GAP, Puma, Raodster',
            price:'From 199 + Extra 10% Off',
            des:'Men Wears'
        },
        {
            img:'https://rukminim1.flixcart.com/flap/300/300/image/e3ff066cfd6881cb.jpg?q=70',
            product:'Plain Case Cover ',
            price:'Extra 10% off',
            des:'For all Top Models'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/ktvucnk0/mangalsutra-tanmaniya/m/o/u/0-sf-chain-lp-25-jm13-vatki-brado-jewellery-original-imag74rkxcdrvqev.jpeg?q=70',
            product:'Chain Set',
            price:'From 199 + Extra 10% Off',
            des:'Bestseller@lowestprice'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/kxkqavk0/accessories-combo/f/m/l/ec-combo-belt-wallet-elite-crafts-original-imag9zxaycwugnks.jpeg?q=70',
            product:'Men Wallet & Belts',
            price:'From 199 + Extra 10% Off',
            des:'Selling Fast Grab Now!'
        },
    ];
    const DealDiv = {
        display: 'flex',
        justifyContent: 'flexStart',
        alignItems: 'center',
        margin: '20px 0',
        backgroundColor: 'white'
    }
    return(<div style={DealDiv}>
    {data.map(dt=>(
        <HomeCard>
        <img src={dt.img} alt={dt.name} />
        <p className='product'>{dt.product}</p>
        <p className='price'>{dt.price}</p>
        <p className='des'>{dt.des}</p>
        </HomeCard>
    ))}
    </div>)
}

export default Deal