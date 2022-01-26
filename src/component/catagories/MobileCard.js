import React from 'react'
import {Link} from 'react-router-dom'
import { Div, Image, Anchor, Ul, Li, Para} from '../../styled-components/styles'

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

    return(<Div direction='column' aItems='center' margin='10px 50px'>
    {data.map(md =>(
    <Anchor textDecoration='none' color='black'><Link to='/MobileView'>
    <Div margin='20px 10px' padding='10px' bBottom='0.5px solid #C0D8C0' width='98%'>
        <Image src={md.img} alt={md.name} height='330px' margin='10px 0 10px 50px' />
        <Div direction='column' margin='0 0 0 100px'>
        <h3>{md.name}</h3>
        <Div aItems='center' bgColor='green' color='white' margin='0 10px' padding='2px' bRadius='4px' >
        <Para as='h5' font='15px' weight='200'>{md.rating}</Para>
        <Para as='span' font='12px'><i class="fas fa-star"></i></Para>
        </Div>
        <Ul lstyle='disc' font='15px'>
            <Li LH='30px'>{md.spec[0]}</Li>
            <Li LH='30px'>{md.spec[1]}</Li>
            <Li LH='30px'>{md.spec[2]}</Li>
            <Li LH='30px'>{md.spec[3]}</Li>
            <Li LH='30px'>{md.spec[4]}</Li>
            <Li LH='30px'>{md.spec[5]}</Li>
        </Ul>
        </Div>
        <Div direction='column' margin='0 0 0 200px'>
        <Div aItems='center'>
        <Para as='h2' font='25px' >₹{md.price}</Para>
        <Image alt='assurance' height='20px' width='80px' margin='0 20px' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' />
        </Div>
        <Para as='h6' font='12px' margin='5px 0' weight='500'>Free delivery</Para>
        <Para as='h5' margin='5px 0' font='12px'>Upto ₹{md.discount} Off on Exchange</Para>
        </Div>
    </Div>
    </Link>
    </Anchor>
    ))}
    </Div>)
}

export default MobileCard