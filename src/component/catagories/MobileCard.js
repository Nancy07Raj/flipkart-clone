import React from 'react'
import {Link} from 'react-router-dom'
import {MCard} from '../../styled-components/styles'

const MobileCard = ()=>{
    const data =[
        {
            name: 'Realme C11 2021(Cool Blue, 32 GB)',
            img:'https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70',
            rating: '4.4',
            spec: ['2 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
            '16.51 cm (6.5 inch) HD+ Display',
            '8MP Rear Camera | 5MP Front Camera',
            '5000 mAh Battery',
            'Octa-core Processor',
        '1 Year Warranty for Mobile and 6 Months for Accessories'],
            price: '7,499',
            discount: '6,950'
        },
        {
            name: 'Realme C11 2021(Cool Green, 32 GB)',
            img:'https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70',
            rating: '4.4',
            spec: ['2 GB RAM | 32 GB ROM | Expandable Upto 256 GB',
            '16.51 cm (6.5 inch) HD+ Display',
            '8MP Rear Camera | 5MP Front Camera',
            '5000 mAh Battery',
            'Octa-core Processor','1 Year Warranty for Mobile and 6 Months for Accessories'],
            price: '7,499',
            discount: '6,950'

        },
        {
            name: 'Realme C11 2021(Cool Blue, 64 GB)',
            img:'https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70',
            rating: '4.4',
            spec: ['4GB RAM | 64 GB ROM | Expandable Upto 256 GB',
            '16.51 cm (6.5 inch) HD+ Display',
            '8MP Rear Camera | 5MP Front Camera',
            '5000 mAh Battery',
            'Octa-core Processor',
        '1 Year Warranty for Mobile and 6 Months for Accessories'],
            price: '8,999',
            discount: '8,450'
        },
        {
            name: 'Realme C11 2021(Cool Green, 64 GB)',
            img:'https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70',
            rating: '4.4',
            spec: ['4 GB RAM | 64 GB ROM | Expandable Upto 256 GB',
            '16.51 cm (6.5 inch) HD+ Display',
            '8MP Rear Camera | 5MP Front Camera',
            '5000 mAh Battery',
            'Octa-core Processor','1 Year Warranty for Mobile and 6 Months for Accessories'],
            price: '8,999',
            discount: '8,450'

        }
    ];
    const cardDiv={
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flexStart',
        alignItems: 'center',
        backgroundColor: 'white',
        margin:'10px 50px',
      };
      const li ={
          textDecoration : 'none',
          color: 'black'
      }

    return(<div style={cardDiv}>
    {data.map(md =>(
    <Link style={li} to='/MobileView'>
    <MCard>
        <img src={md.img} alt={md.name}/>
        <div className='spec'>
        <h3>{md.name}</h3>
        <div className='rating'>
        <h5>{md.rating}</h5>
        <span><i class="fas fa-star"></i></span>
        </div>
        <ul style={{listStyleType:'disc'}}>
            <li>{md.spec[0]}</li>
            <li>{md.spec[1]}</li>
            <li>{md.spec[2]}</li>
            <li>{md.spec[3]}</li>
            <li>{md.spec[4]}</li>
            <li>{md.spec[5]}</li>
        </ul>
        </div>
        <div className='price'>
        <div>
        <h2>{md.price}</h2>
        <img alt='assurance' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' />
        </div>
        <h6>Free delivery</h6>
        <h5>Upto <b>₹{md.discount}</b> Off on Exchange</h5>
        </div>
    </MCard>
    </Link>
    ))}
    </div>)
}

export default MobileCard