import React from 'react';
import '../../sass/mobileView.scss'

const MobileView = ()=>{
    return(<div className='mobiles'>
    <div className='mobileView'>
        <img src='https://rukminim1.flixcart.com/image/128/128/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70' alt='view'/>
        <img src='https://rukminim1.flixcart.com/image/128/128/kqjtd3k0/mobile/u/e/u/c11-2021-rmx3231-realme-original-imag4j4y8dw5zgbf.jpeg?q=70' alt='view' />
        <img src='https://rukminim1.flixcart.com/image/128/128/kqjtd3k0/mobile/d/m/y/c11-2021-rmx3231-realme-original-imag4j4y2vpzefpe.jpeg?q=70' alt='view' />
        <img src='https://rukminim1.flixcart.com/image/128/128/kqjtd3k0/mobile/t/z/k/c11-2021-rmx3231-realme-original-imag4j4y69fhffdc.jpeg?q=70' alt='view' />
        <img src='https://rukminim1.flixcart.com/image/128/128/kqjtd3k0/mobile/4/x/b/c11-2021-rmx3231-realme-original-imag4j4yprbkfdgd.jpeg?q=70' alt='view' />
        <img src='https://rukminim1.flixcart.com/image/128/128/kqjtd3k0/mobile/y/6/m/c11-2021-rmx3231-realme-original-imag4j4yhmthmzve.jpeg?q=70' alt='view'/>
    </div>
    <div className='cart'>
    <div className='FullMobile'>
        <img className='mobileImg' src='https://rukminim1.flixcart.com/image/832/832/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70' alt='mobile' />
    <span><i class="fas fa-heart"></i></span>
    </div>
    <div className='btn'>
    <button className='add'><i class="fas fa-shopping-cart"></i>ADD TO CART</button>
    <button className='buy'><i class="fas fa-bolt"></i>BUY NOW</button>
    </div>
    </div>
    <div className='details'>
    <h2>realme C11 2021 (Cool Blue, 32 GB)  (2 GB RAM)</h2>
    <div className='rating'>
    <div className='icon'>
        <h5>4.4</h5>
        <span><i class="fas fa-star"></i></span>
    </div>
    <div className='assurance'>
    <h4>1,45,226 Ratings & 6,627 Reviews</h4>
    <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png' alt='assurance' />
    </div>
    </div>
    <h4 style={{color: 'green', fontSize: '14px', margin:'10px'}}>Extra 50% Off</h4>
    <div className='price'>
    <h1>₹ 7,499</h1>
    <span>₹ 7,999</span>
    <h5>6% Off</h5>
    </div>
    <div className='offer'>
    <h3>Avaliable offers</h3>
    <ul className='fa-ul'>
    <li><i class="fa-li fas fa-tag"></i><b>Bank Offer</b> 10% off on ICICI Bank Credit Cards, up to ₹750. On orders of ₹5000 and above<span>T&C</span></li>
    <li><i class="fa-li fas fa-tag"></i><b>Bank Offer</b> 10% off on ICICI Bank Debit Cards, up to ₹250. On orders of ₹2500 and above<span>T&C</span></li>
    <li><i class="fa-li fas fa-tag"></i><b>Bank Offer</b> Additional ₹750off on Debit and Credit cards<span>T&C</span></li>
    <li><i class="fa-li fas fa-tag"></i><b>Bank Offer</b> Get extra ₹500 off (price inclusive of discount)<span>T&C</span></li>
    </ul>
    </div>
    <div className='buyOption'>
    <div className='withoutExchange'>
    <input type='radio' checked />
    <h5>Buy without Exchange </h5>
    <span>₹ 7,499</span>
    </div>
    <div className='withExchange'>
    <input type='radio' />
    <div>
    <h5>Buy without Exchange </h5>
    <h6><i class="fas fa-check"></i>Include special discount of ₹ 750 </h6>
    </div>
    <span>up to ₹ 6,400 Off</span>
    </div>
    </div>
    </div>
    </div>)
}

export default MobileView