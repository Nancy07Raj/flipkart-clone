import React from 'react'
import Card from './Card'

function Grocery(){
    const data = [
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kqidx8w0/rice/z/d/d/white-biryani-special-na-basmati-rice-pouch-fortune-original-imag4gb2shaykhyw.jpeg?q=70',
            product:'KOHINOOR Royale Authentic Biryani Basmati Rice',
            spec:'5 kg',
            rating:'4.6',
            sale:'748',
            price:'445',
            strike:'929',
            offer:'44%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/ktbu6q80/nut-dry-fruit/g/e/x/400-combo-california-almonds-200gm-dried-figs-200gm-american-original-imag6zz523g2zusa.jpeg?q=70',
            product:'lila dry fruits Combo California Almonds 100Gm & Dried ',
            spec:'2 x 100 g',
            rating:'3.3',
            sale:'48',
            price:'229',
            strike:'479',
            offer:'55%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kuh9yfk0/chips/x/x/e/american-style-cream-and-onion-lay-s-original-imag7hjngfxv2b4g.jpeg?q=70',
            product:'Lays American Style Cream and Onion Chips',
            spec:'40 g',
            rating:'4.3',
            sale:'517',
            price:'17',
            strike:'20',
            offer:'15%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kydb3ww0/rice/a/1/t/1-2-red-organic-unpolished-poha-pouch-truefarm-na-original-imagam8af7k7hsec.jpeg?q=70',
            product:'Truefarm Organic Red Poha (Unpolished)',
            spec:'1.2 kg',
            rating:'4.5',
            sale:'248',
            price:'449',
            strike:'559',
            offer:'40%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kqttg280/ready-meal/e/m/i/400-tomato-puree-passata-vellutata-product-of-italy-urban-original-imag4qy8ejymgbbh.jpeg?q=70',
            product:'Urban Platter Tomato Puree [Passata Vellutata]',
            spec:'400 g',
            rating:'4.6',
            sale:'248',
            price:'295',
            strike:'300',
            offer:'45%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/knan98w0/butter-milk/w/q/f/200-tetra-lassi-tetrapack-govind-milk-and-milk-products-original-imag2y4jhget3va7.jpeg?q=70',
            product:'Govind Milk and milk products Tetra Lassi',
            spec:'NA, 15 x 200 ml',
            rating:'4.7',
            sale:'348',
            price:'40',
            strike:'50',
            offer:'40%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kdxfc7k0/ghee/w/j/j/1-1-ghee-plastic-bottle-govind-milk-and-milk-products-original-imafuqfv5vyh6yyz.jpeg?q=70',
            product:'Govind Milk and milk products Ghee 1 L + Free Shahi Dry',
            spec:'1 liter',
            rating:'4.3',
            sale:'86',
            price:'549',
            strike:'600',
            offer:'36%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kgcl7680/sweet-mithai/g/k/d/2000-sweets-kesar-bati-rasgulla-combo-pack-1-kg-x-2-tin-pack-original-imafwhm5dyhn5mxf.jpeg?q=70',
            product:'Yuvraj Food Product sweets kesar Bati & Rasgulla combo',
            spec:'2 x 1000 g',
            rating:'4.3',
            sale:'36',
            price:'435',
            strike:'530',
            offer:'48%',
        },
    ]
    return(<Card data={data} />)
}

export default Grocery