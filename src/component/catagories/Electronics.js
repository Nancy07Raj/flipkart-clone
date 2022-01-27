import React from 'react'
import { Div, Image, Para } from '../../styled-components/styles'

function Electronics(){
    const data = [
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kpcy5jk0/mouse/5/q/u/comfort-zebronics-original-imag3m6z8xpqqxf4.jpeg?q=70',
            product:'ZEBRONICS ZEB-RISE Wired Optical Mouse',
            spec:'USB 2.0,Black',
            rating:'4.1',
            sale:'20,248',
            price:'149',
            strike:'229',
            offer:'34%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kihqz680-0/surge-protector/t/h/z/3-3-multi-plug-fuse-extension-plastic-board-switch-with-original-imafy9hnxyusvwwf.jpeg?q=70',
            product:'Syska Power Wheel 3  Socket Extension Boards',
            spec:'Gray, White',
            rating:'4.3',
            sale:'87,248',
            price:'249',
            strike:'429',
            offer:'55%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/k7gikcw0/keyboard/laptop-keyboard/j/7/u/portronics-por-372-key2-wireless-keyboard-mouse-combo-original-imafpzt8mhb4hrmr.jpeg?q=70',
            product:'Portronics POR-373 Key2 Wireless Keyboard & Mouse Combo Wireless Multi-device Keyboard',
            spec:'White',
            rating:'4.3',
            sale:'60,248',
            price:'549',
            strike:'729',
            offer:'50%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kw2fki80/computer/5/u/l/-original-imag8tthwtgbvmtu.jpeg?q=70',
            product:'HP Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home)',
            spec:'15.6 inch, Jet Black, 1.75 kg, With MS Office',
            rating:'4.5',
            sale:'34,248',
            price:'41,549',
            strike:'50,559',
            offer:'60%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kpr8k280/cases-covers/back-cover/g/0/3/acs02887-spigen-original-imag3x2nzurwgfnd.jpeg?q=70',
            product:'Spigen Back Cover for Apple iPad Pro11 inch (2021)',
            spec:'Black',
            rating:'4.6',
            sale:'46,248',
            price:'1,249',
            strike:'1,500',
            offer:'45%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/jp8ngcw0/printer/n/a/j/canon-g3012-original-imafbgx3yzd6fayw.jpeg?q=70',
            product:'Canon G3012 Multi-function WiFi Color Printer',
            spec:'Black, Ink Tank, 2 Ink Bottles Included',
            rating:'4.7',
            sale:'34,248',
            price:'15,786',
            strike:'17,345',
            offer:'70%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/ktlu9ow0/graphics-tablet/j/r/o/ruffpad-8-5e-medium-1024-no-por-1383-portronics-original-imag6wp9fpuzaa8j.jpeg?q=70',
            product:'Portronics POR-1383 Ruffpad 8.5E 5 x 8.5 inch Graphics',
            spec:'Black',
            rating:'3.3',
            sale:'546',
            price:'1,149',
            strike:'1,600',
            offer:'36%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kmgn0cw0/pendrive/pendrive/8/z/j/sdcz50-032g-sdcz50-032g-i35-sandisk-original-imagfc7rdywypccr.jpeg?q=70',
            product:'SanDisk SDCZ50-064g-I35 /SDCZ50-064g-B35 64 GB Pen Drive',
            spec:'Black, Red',
            rating:'4.3',
            sale:'546',
            price:'520',
            strike:'600',
            offer:'30%',
        },
    ]
    return(<Div wrap='wrap' margin='10px 0'>
    {data.map(dt=>(
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
        <Div margin='5px' aItems='center' margin='10px 5px'>
            <Para as='h3' margin='0 10px 0 0'>₹{dt.price}</Para>
            <Para as='h3' color='gray' tDecoration='line-through'>₹{dt.strike}</Para>
            <Para as='h5' color='green' font='13px' margin='0 5px'>{dt.offer} Off</Para>
        </Div>

        </Div>
    ))}

    </Div>)
}

export default Electronics