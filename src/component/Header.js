import React from 'react';
import '../sass/Header.scss'

const Header =()=>{
    return(<div className='header'>
    <div className='flipkart'>
    <img className='flipkartImg' alt='flipkart' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' />
    <div className='explore'>
    <h5><i>Explore<span> Plus</span></i></h5>
    <img alt='explore' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png' />
    </div>
    </div>
    <div className='searchbar'>
    <input type='text' placeholder='Search for products, brands and more' />
    <span><i class="fas fa-search"></i></span>
    </div>
    <button>Login</button>
    <div className='more'>
        <h4>More</h4>
        <span><i class="fas fa-chevron-down"></i></span>
    </div>
    <div className='cart'>
        <span><i class="fas fa-shopping-cart"></i></span>
        <h4>Cart</h4>
    </div>
    </div>)
}

export default Header