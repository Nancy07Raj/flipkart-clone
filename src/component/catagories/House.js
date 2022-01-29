import React from 'react'
import Card from './Card'

function House(){
    const data = [
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kq2o2vk0/chopper/r/t/7/8906022175981-butterfly-original-imag45wmvxhmgxbd.jpeg?q=70',
            product:'Shopixo Quick Chopper 450ml Vegetable & Fruit Chopper',
            spec:'Quick Chopper 450ml',
            rating:'4.7',
            sale:'48',
            price:'129',
            strike:'209',
            offer:'30%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/ki6bgcw0-0/idli-maker/e/d/1/325-mahavir-original-imafyypavx4ufn3p.jpeg?q=70',
            product:'Mahavir Heavy Gauge Stainless Steel Idli Cooker Kitchen',
            spec:'6 Plates, 24 Idlis',
            rating:'4.3',
            sale:'3,248',
            price:'749',
            strike:'829',
            offer:'45%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/ku2zjww0/spoon/q/u/v/royal-pack-of-6-shri-sam-original-imag7abqdhgqzcf3.jpeg?q=70',
            product:'Shri & Sam Royal Pack of 6 Stainless Steel Dessert Spoon',
            spec:'Pack of 6',
            rating:'4.3',
            sale:'73',
            price:'149',
            strike:'229',
            offer:'50%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kh3qkcw0/kitchen-scissor/9/c/z/cl4vr-macarize-original-imafx6zaxgmfnpnz.jpeg?q=70',
            product:'MACARIZE 2 in 1 JAPAN design Kitchen Steel All-Purpose',
            spec:'Black, Pack of 1',
            rating:'3.5',
            sale:'548',
            price:'99',
            strike:'120',
            offer:'40%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/k7hy07k0/fork/v/y/x/bird-macarize-original-imafppyyemzkqdab.jpeg?q=70',
            product:'MACARIZE Happy Bird Fruit Fork Set Plastic Fruit Fork',
            spec:'Pack of 1',
            rating:'4.6',
            sale:'248',
            price:'49',
            strike:'100',
            offer:'65%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/kiyw9e80/chopper/p/u/k/handy-mini-chopper-pigeon-original-imafyn99tchfgvzs.jpeg?q=70',
            product:'Pigeon by pigeon Handy Chopper Vegetable Chopper',
            spec:'1 Chopper',
            rating:'4.7',
            sale:'34,248',
            price:'266',
            strike:'445',
            offer:'66%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/ktszgy80/lunch-box/v/4/7/teso-lunch-box-with-bottle-3-stainless-steel-containers-plastic-original-imag72gp8uhs57uf.jpeg?q=70',
            product:'Oliveware Premium Lunch Box with Bottle - Black',
            spec:'Black',
            rating:'4.3',
            sale:'246',
            price:'1,449',
            strike:'1,600',
            offer:'46%',
        },
        {
            img:'https://rukminim1.flixcart.com/image/612/612/k62i5jk0/container/7/u/g/pp-202-container-set-of-2-pcs-multiciolor-mastercook-original-imafzhbzxmzyhq5f.jpeg?q=70',
            product:'MASTER COOK - 500 ml Polypropylene Fridge Container',
            spec:'Pack of 2, Blue, Pink',
            rating:'4.3',
            sale:'146',
            price:'420',
            strike:'600',
            offer:'30%',
        },
    ]
    return(<Card data={data} />)
}

export default House