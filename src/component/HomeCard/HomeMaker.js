import React from 'react'
import {HomeCard} from '../../styled-components/styles'

function HomeMaker(){
    const data = [
        {
            img:'https://rukminim1.flixcart.com/image/300/300/jhgl5e80/sofa-bed/6/y/z/double-blue-polyester-8111-blue-furniturekraft-blue-original-imaf5ggnjyh3zaqa.jpeg?q=70',
            product:'Sofa Beds',
            price:'From 7,999',
            des:'From Top Indian Brands'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/jxjahe80/cabinet-drawer/b/f/d/pp-magnum-5-tier-nakoda-light-brown-original-imafhktg9zpqmeth.jpeg?q=70',
            product:' Cabinet & Drawers',
            price:'From 199',
            des:'New Collections'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/kyj0vbk0/induction-cook-top/h/0/5/-original-imagaqsng6rtrkyh.jpeg?q=70',
            product:'Induction Cooktops',
            price:'Upto 60% Off',
            des:'Prestige, Philips'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/jqgy3rk0/computer-table/j/2/v/particle-board-dkl-comp-tb-09-delite-kom-brown-original-imafcheqbgers37z.jpeg?q=70',
            product:'Office Study Table',
            price:'From 3,299',
            des:'Made in India Brands'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/kuipea80/electric-kettle/k/u/y/favourite-pigeon-original-imag7mzd7efhkvnr.jpeg?q=70',
            product:'Electric Kettles',
            price:'From 375',
            des:'Bestseller@lowestprice'
        },
        {
            img:'https://rukminim1.flixcart.com/image/300/300/jo8xg280/wardrobe-closet/n/h/9/particle-board-w4wal00ed2wmp-flipkart-perfect-homes-american-original-imaf9m4hh8mg5e79.jpeg?q=70',
            product:'Wardrobes',
            price:'From 5,999',
            des:'By Flipkart Perfect Home!'
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

export default HomeMaker