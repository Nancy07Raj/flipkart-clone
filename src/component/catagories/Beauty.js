import React from 'react'
import Card from './Card'

function Beauty(){
    const data = [
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kx3l0nk0/stuffed-toy/u/c/h/3-feet-lovable-hugable-cute-large-teddy-bear-best-for-someone-original-imag9nfkeuhvmuns.jpeg?q=70',
            product:'fluffies Cute Nylex Mother Teddy Bear',
            spec:'40 cm',
            rating:'4.1',
            sale:'5,948',
            price:'499',
            strike:'2,409',
            offer:'45%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kffq2kw0/gamingconsole/d/4/q/setup-mobile-gaming-1-et-bazar-no-original-imafvvywbztpb8qt.jpeg?q=70',
            product:'ET BAZAR Battleground Mobile india Gaming Trigger Work',
            spec:'Black',
            rating:'3.5',
            sale:'748',
            price:'549',
            strike:'1.529',
            offer:'69%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kjkbv680-0/face-wash/l/r/7/450-face-wash-clean-clear-original-imafz3hz4fgwhfnf.jpeg?q=70',
            product:'Clean & Clear Face Wash',
            spec:'450ml',
            rating:'4.5',
            sale:'1,60,473',
            price:'349',
            strike:'429',
            offer:'39%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/jm81zm80/moisturizer-cream/z/d/g/520-body-milk-nourishing-body-lotion-400ml-120-ml-pack-of-2-original-imaf96axt6bjhxff.jpeg?q=70',
            product:'NIVEA Body Milk Nourishing Body Lotion 400ml & 120 ml ',
            spec:'520 ml',
            rating:'4.5',
            sale:'93,648',
            price:'316',
            strike:'520',
            offer:'40%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kjvrdzk0/bat/n/p/z/600-700-plastic-bat-plastic-bat-full-size-plastic-bat-for-tennis-original-imafzcg3ygrfwz8q.jpeg?q=70',
            product:'LYCAN Junior Cricket Bat Size 3 For Age Group 8 Years',
            spec:'400 g',
            rating:'3.9',
            sale:'848',
            price:'199',
            strike:'320',
            offer:'34%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kafol8w0/helmet/f/g/x/adjustable-1-st-1852-42-open-face-strauss-original-imafsy39acfbx5v4.jpeg?q=70',
            product:'STRAUSS Adjustable Cycling Helmet',
            spec:'Yellow',
            rating:'4.2',
            sale:'1,248',
            price:'966',
            strike:'1,999',
            offer:'50%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/klzhq4w0/pump/a/r/h/airforce-1-airforce-1-royal-waves-original-imagyzwrdxndhcu4.jpeg?q=70',
            product:'Chromoto Action Multipurpose Ball/Bicycle/Balloon Air',
            spec:'Sliver',
            rating:'3.9',
            sale:'8,246',
            price:'249',
            strike:'1,300',
            offer:'78%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/k73nlow0/sport-glove/e/j/j/na-mountain-bike-gloves-for-cycling-riding-gym-exercise-half-original-imafpf8fftn68ks5.jpeg?q=70',
            product:'Addmax Mountain Bike Gloves for Cycling Riding Gym',
            spec:'Black, Red',
            rating:'4.1',
            sale:'76',
            price:'399',
            strike:'999',
            offer:'60%',
        },
    ]
    return(<Card data={data}/>)
}

export default Beauty