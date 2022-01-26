import React from 'react'
import {Image,Para} from '../../styled-components/styles'
import '../../sass/deal.scss'

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
    return(<div className='DealDiv'>
    <Para as='h2' width='98%' font='25px' margin='10px' bBottom='1px solid #c0d8c0' padding='10px'>Deal of the Day</Para>
    {/* <h2 className='styleH2'>Deal Of the Day</h2> */}
    <div className='card'>
    {data.map(dt=>(
        <div className='HomeCard'>
        <Image margin='20px 0' hover='transform: scale(1.1)' fit='contain' height='120px' width='150px' src={dt.img} alt={dt.name} />
        <Para align='center' margin='10px 5px 5px 5px' font='15px' whiteSpace='nowrrap' overflow='ellipsis' >{dt.product}</Para>
        <Para align='center' margin='5px' font='13px' color='#388e3c'>{dt.price}</Para>
        <Para align='center' margin='5px' font='13px' color='gray'>{dt.des}</Para>
        </div>
    ))}
    </div>
    </div>)
}

export default Deal