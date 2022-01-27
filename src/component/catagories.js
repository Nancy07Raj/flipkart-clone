import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/catagories.scss'
import {Image, Para} from '../styled-components/styles'

const Catagories = ()=>{
    const data= [
        {
            name: 'Home',
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XrW-ko66LTMXm4u2G2eBP4AKg5VftvuSng&usqp=CAU',
        },
    {
        name: 'Mobiles',
        img:'https://rukminim1.flixcart.com/flap/128/128/image/e2b2795ad9e97a57.png?q=100',
    },
    {
        name :'Fashion',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/5c44091c4cde5527.png?q=100',
    },
    {
        name: 'Electronics',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/9468f7c638007682.png?q=100',
    },
    {
        name: 'House',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/0a4e27792f699b67.png?q=100'
    },
    {
        name: 'Travel',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/692f09b7ab4dcf06.png?q=100'
    },
    {
        name: 'Appliances',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/d42b57d8569fccc3.png?q=100'
    },
    {
        name: 'Furniture',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/2a284788d550ac21.png?q=100'
    },
    {
        name: 'Beauty, Toy & more',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/db4875975dc033aa.png?q=100'
    },
    {
        name: 'Grocery',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/d270faabceb32f09.png?q=100'
    },
]
    return(<div className='catagoriesContainer'>
    {data.map((card,index)=>(
        <Link to={'/'+ card.name} >
        <div className = 'catagoriesCard'>
            <Image height='70px' width='70px' fit='cover' src={card.img} alt={card.name} key={index} />
            <Para as='h3' margin='5px 0' font='15px' weight='600'>{card.name}</Para>
        </div>
        </Link>
    ))}
    </div>)
}

export default Catagories;