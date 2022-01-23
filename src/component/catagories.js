import React from 'react'
import { Link } from 'react-router-dom'
import '../sass/catagories.scss'
import {CatagoriesCard} from '../styled-components/styles'

const Catagories = ()=>{
    const data= [
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
        name: 'Home',
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
        <CatagoriesCard>
            <img src={card.img} alt='catagories' key={index} />
            <Link to={'/'+ card.name} ><h3>{card.name}</h3></Link>
        </CatagoriesCard>
    ))}
    </div>)
}

export default Catagories;