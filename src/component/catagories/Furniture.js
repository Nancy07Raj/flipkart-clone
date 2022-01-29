import React from 'react'
import Card from './Card'

function Furniture(){
    const data = [
        {
            img:'https://rukminim1.flixcart.com/image/612/612/ktlu9ow0/tv-entertainment-unit/j/y/9/particle-board-wooden-tv-entertainment-unit-wall-set-top-box-original-imag6wz3yqptatu3.jpeg?q=70',
            product:'Furnifry Wooden TV Entertainment Unit/Wall Set Top Box',
            spec:'Finish Color - Grey & White, DIY(Do-It-Yourself)',
            rating:'3.7',
            sale:'48',
            price:'2,499',
            strike:'7,409',
            offer:'66%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/k3j1z0w0/dining-set/k/u/2/4-seater-ligth-brown-rubber-wood-dt307-4s-2-royaloak-dark-brown-original-imafmmbzjpvxfvh2.jpeg?q=70',
            product:'Hometown Solid Wood 4 Seater Dining Set',
            spec:'Finish Color -Cappuccino, Knock Down',
            rating:'4.3',
            sale:'48',
            price:'21,749',
            strike:'70,829',
            offer:'69%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/krxtrww0/bunk-loft-bed/z/n/n/na-wrought-iron-fk-bb-6071-r-tri-colour-furniturekraft-tri-original-imag5m24cyrr8sgv.jpeg?q=70',
            product:'FurnitureKraft Valencia Metal Bunk Bed',
            spec:'Finish Color - Multicolor, Knock Down',
            rating:'4.3',
            sale:'473',
            price:'14,149',
            strike:'15,229',
            offer:'50%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kcw9w280/bed-mattress/y/c/v/queen-5-29-52-25-98-bacmg750066000500blue-coir-duroflex-original-imaftx2vmrnkyrhu.jpeg?q=70',
            product:'DUROFLEX Back Magic Duropedic with Doctor Recommended',
            spec:'L x W: 72 inch x 60 inch',
            rating:'4.5',
            sale:'648',
            price:'16,799',
            strike:'19,120',
            offer:'12%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kll7bm80/sticker/q/w/r/large-wall-stickers-wallpaper-furniture-design-self-adhesive-500-original-imagyz8vhdr9wgzh.jpeg?q=70',
            product:'WallBerry Wall Stickers Wallpaper Brown Natural Wood',
            spec:'Pack of 1',
            rating:'4',
            sale:'54,248',
            price:'499',
            strike:'1,900',
            offer:'77%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kylvr0w0/bean-bag/g/q/x/xxl-bean-bag-filled-with-2-kg-beans-coaster-shine-original-imagas77hed8gzhj.jpeg?q=70',
            product:'Coaster Shine XXXL Teardrop Bean Bag With Bean Filling',
            spec:'Brown',
            rating:'3.7',
            sale:'248',
            price:'1,566',
            strike:'2,745',
            offer:'45%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kwmfqfk0/sofa-sectional/t/x/k/-original-imag98zwzy3dcygg.jpeg?q=70',
            product:'Sleepyhead Yolo Fabric 5 Seater Sofa',
            spec:'Finish Color - Berry Blue, DIY(Do-It-Yourself)',
            rating:'4.3',
            sale:'246',
            price:'33,449',
            strike:'46,600',
            offer:'32%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kq6yefk0/carpet-rug/z/z/h/pe-vc-multicolor-155x215-00c-sasta-sunder-tikau-original-imag49h4pprkzwbt.jpeg?q=70',
            product:'Cotton Door Mat',
            spec:'MERUN, Medium',
            rating:'4.3',
            sale:'176',
            price:'280',
            strike:'400',
            offer:'30%',
        },
    ]
    return(<Card data={data} />)
}

export default Furniture