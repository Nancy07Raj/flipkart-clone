import React from 'react'
import {FashionCard} from '../../styled-components/styles'

function Fashion(){
    const data =[
        {
            img:'https://rukminim1.flixcart.com/image/495/594/jiqb8nk0/sari/x/2/y/free-sram-8176-ishin-original-imaf6fzgg4fcszyf.jpeg?q=50',
            name: 'ishin',
            cat: 'Women Sarees',
            ass:'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png',
            price: '₹ 1,299',
            strike: '₹ 1,500'
        },
        {
            img:'https://rukminim1.flixcart.com/image/495/594/klfhk7k0/ethnic-set/p/s/y/m-kpldyt-10000-ishin-original-imagyjw66stps4kc.jpeg?q=50',
            name: 'ishin',
            cat: 'Women Kurti Set',
            ass:'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png',
            price: '₹ 999',
            strike: '₹ 1,300'
        },
        {
            img:'https://rukminim1.flixcart.com/image/495/594/kkec4280/ethnic-set/z/m/0/m-kplpram-9092-ishin-original-imafzr76szpfyhgk.jpeg?q=50',
            name: 'ishin',
            cat: 'Women Plazo Set',
            ass:'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png',
            price: '₹ 899',
            strike: '₹ 1,000'
        },
        {
            img:'https://rukminim1.flixcart.com/image/495/594/krjjde80/dress/r/g/i/s-dhtpknmqr-12049-ishin-original-imag5bfhfshbv4dw.jpeg?q=50',
            name: 'ishin',
            cat: 'Women Goven',
            ass:'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png',
            price: '₹ 799',
            strike: '₹ 900'
        },
        {
            img:'https://rukminim1.flixcart.com/image/495/594/kg40k280-0/kurta/q/k/i/l-kbeds-4011-ishin-original-imafwf6gat52hrge.jpeg?q=50',
            name: 'ishin',
            cat: 'Women Anarkali set',
            ass:'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png',
            price: '₹ 1,299',
            strike: '₹ 1,400'
        },
        {
            img:'https://rukminim1.flixcart.com/image/495/594/keuagsw0-0/kurta/g/6/y/xxl-kurpram-3007-ishin-original-imafvfqzyhdyszpd.jpeg?q=50',
            name: 'ishin',
            cat: 'Women Kurti and Pant',
            ass:'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png',
            price: '₹ 999',
            strike: '₹ 1,100'
        },
    ];
    const styleDiv ={
        display : 'flex',
        flexWrap: 'wrap',
        justifyContent : 'spaceBetween',
        alignItems: 'flexStart',
        margin: '10px 50px',
        backgroundColor: 'white',
    }

    return(<div style={styleDiv}>
    {data.map(data=>(
        <FashionCard>
        <img className='fashionImg' src={data.img} alt='dress' />
        <h5>{data.name}</h5>
        <div className='catagory'>
        <p>{data.cat}</p>
        <img src={data.ass} alt='assurance' />
        </div>
        <p className='price'>{data.price}<span>{data.strike}</span> Off</p>
    </FashionCard>
    ))}
    </div>)
}

export default Fashion;