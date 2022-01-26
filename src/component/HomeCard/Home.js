import React from 'react'
import HomeMaker from './HomeMaker'
import Deal from './Deal'
import '../../sass/Home.scss'
import {Para } from '../../styled-components/styles'

function Home(){
    return(<>
        <Deal />
        <HomeMaker />
        <div >
            <Para color='gray' as='h2' margin='10px' align='justify' font='16px'>Flipkart: The One-stop Shopping Destination</Para>
            <Para color='gray' margin='13px' align='justify' font='10px' >E-commerce is revolutionizing the way we all shop in India.
             Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles.
             Flipkart houses everything you can possibly imagine, from trending electronics like laptops,
             tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing
              and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes
              to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers
              and other time-saving kitchen and small appliances; from home furnishings like cushion covers,
              mattresses and bedsheets to toys and musical instruments, we got them all covered.
              You name it, and you can stay assured about finding them all here. For those of you with erratic working hours,
              Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.
            </Para>
            <Para color='gray' as='h2' margin='10px' align='justify' font='16px'>Flipkart Plus</Para>
            <Para color='gray' margin='13px' align='justify' font='10px' >A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee.
             All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order,
             Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals,
             exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more!
            </Para>
            <Para color='gray' as='h2' margin='10px' align='justify' font='16px'>No Cost EMI</Para>
            <Para color='gray' margin='13px' align='justify' font='10px' >In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee.
            Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket.
            If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.
            </Para>
            <Para color='gray' as='h2' margin='10px' align='justify' font='16px'>EMI on Debit Cards</Para>
            <Para color='gray' margin='13px' align='justify' font='10px' >Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply.</Para>
            <Para color='gray' as='h2' margin='10px' align='justify' font='16px'>Mobile Exchange Offers</Para>
            <Para color='gray' margin='13px' align='justify' font='10px' >Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply.</Para>
            <Para color='gray' as='h2' margin='10px' align='justify' font='16px'>Baby and Kids</Para>
            <Para color='gray' margin='13px' align='justify' font='10px' >Your kids deserve only the best. From bodysuits, booties, diapers to strollers, if you're an expecting mother or a new mother, you will find everything you need to set sail on a smooth parenting journey with the help of our baby care collection. When it comes to safety, hygiene and comfort, you can rely on us without a second thought. Huggies, Pampers, MamyPoko, and Johnson & Johnson: we host only the most-trusted names in the business for your baby.</Para>
            <Para color='gray' as='h2' margin='10px' align='justify' font='16px'>Books, Sports and Games</Para>
            <Para color='gray' margin='13px' align='justify' font='10px' >Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving.</Para>
        </div>
        <div className='footer'>
        <div className='links'>
        <div>
            <h4>HOME</h4>
            <a href='#'>Contact Us</a>
            <a href='#'>About Us</a>
            <a href='#'>Careers</a>
            <a href='#'>Flipkart Stories</a>
            <a href='#'>Press</a>
            <a href='#'>Flipkart Wholesale</a>
            <a href='#'>Corporate Information</a>
        </div>
        <div>
            <h4>HELP</h4>
            <a href='#'>Payments</a>
            <a href='#'>Shipping</a>
            <a href='#'>Cancellation & Returns</a>
            <a href='#'>FAQ</a>
            <a href='#'>Report Infringement</a>
        </div>
        <div>
            <h4>POLICY</h4>
            <a href='#'>Return Policy</a>
            <a href='#'>Term Of Use</a>
            <a href='#'>Security</a>
            <a href='#'>Privacy</a>
            <a href='#'>Sitemap</a>
            <a href='#'>EPR Compliances</a>
        </div>
        <div>
            <h4>SOCIAL</h4>
            <a href='#'>Facebook</a>
            <a href='#'>Twitter</a>
            <a href='#'>Youtube</a>
            <a href='#'>FAQ</a>
            <a href='#'>Report Infringement</a>
        </div>
        <div className='mailus'>
            <h4>Mail Us</h4>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
        </div>
        <div>
            <h4>Registered Office Address</h4>
            <p>Flipkart Internet Private Limited,</p>
            <p>Buildings Alyssa, Begonia &</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahalli Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>Telephone: 1800 202 9898</p>
        </div>
        </div>
        </div>
    </>)
}

export default Home;