import React from 'react'
import {Link} from 'react-router-dom'
import { Div, Image, Anchor, Ul, Li, Para} from '../../styled-components/styles'

const Appliances = ()=>{
    const data =[
        {
            name: 'SAMSUNG 80 cm (32 inch) HD Ready LED Smart TV',
            img:'https://rukminim1.flixcart.com/image/312/312/kfoapow0/television/v/h/k/samsung-ua43te50fakxxl-original-imafw2r7knjww635.jpeg?q=70',
            rating: '4.4',
            spec: ['Netflix|Disney+Hotstar|Youtube',
                'Operating System: Tizen',
                'HD Ready 1366 x 768 Pixels',
                '20 W Speaker Output',
                '60 Hz Refresh Rate',
                '2 x HDMI | 1 x USB',
                '1 Year Comprehensive Warranty on Product and 1 Year Additional warranty on Panel'],
            price: '16,499',
            discount: '19,950'
        },
        {
            name: 'Voltas 1.5 Ton 5 Star Window AC - White',
            img:'https://rukminim1.flixcart.com/image/312/312/jtsz3bk0/air-conditioner-new/p/z/n/gwc-18utc3-wsa-1-5-window-godrej-fixed-speed-original-imaff2gc2ebvhmwx.jpeg?q=70',
            rating: '4.3',
            spec: ['Condenser Coil: Copper',
                'Power Consumption: 1525 W',
                'Noise level: 54 dB',
                'Refrigerant: R-32',
                'Wi-Fi Enabled: No',
                '1 Year on Product and 4 Years on Compressor'],
            price: '28,499',
            discount: '36,950'

        },
        {
            name: 'SAMSUNG 192 L Direct Cool Single Door 2 Star Refrigerator',
            img:'https://rukminim1.flixcart.com/image/312/312/klb78nk0/refrigerator-new/m/f/m/rr21a2m2xuz-hl-4-2021-samsung-original-imagygsvgdzfhzwp.jpeg?q=70',
            rating: '4.4',
            spec: ['Liner Compressor',
                '2 Star : For Energy savings up to 20%',
                'Toughened Glass Shelves',
                '192 L : Good for couples and small families',
                'Built-in Stabilizer',
                '2021 BEE Rating Year',
                '1 Year on Product and 10 Years on Compressor From Samsung'],
            price: '14,,239',
            discount: '12,450'
        },
        {
            name: 'KENT KSL-160 Bagless Dry Vacuum Cleaner',
            img:'https://rukminim1.flixcart.com/image/312/312/ji20r680/vacuum-cleaner/8/t/f/philips-powerpro-compact-fc9352-01-bagless-original-imaf5xqwak9evffz.jpeg?q=70',
            rating: '4.1',
            spec: ['Dry Vacuum Cleaner',
                'Maximum Sound Level: 84 dB',
                'Motor Power: 2000 W',
                'Cord Length: 2 m',
                'Wheels | Blower',
                'Retractable Cord',
                '1 Year Warranty from the Date of Purchase'],
            price: '8,999',
            discount: '8,450'

        }
    ];

    return(<Div direction='column' jContent='center' margin='10px 20px'>
    {data.map(md =>(
    <Anchor textDecoration='none' color='black'><Link to='/MobileView'>
    <Div margin='20px 10px' padding='10px' bBottom='0.5px solid #C0D8C0' width='98%'>
        <Div aItems='center' width='300px'>
        <Image src={md.img} alt={md.name} height='200px' width='260px' fit='contain' />
        </Div>
        <Div direction='column' margin='0 0 0 100px'>
        <Para as='h3' margin='0 0 15px 20px'>{md.name}</Para>
        <Div aItems='center' bgColor='green' color='white' margin='0 0 0 20px' padding='2px' bRadius='4px' >
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

export default Appliances