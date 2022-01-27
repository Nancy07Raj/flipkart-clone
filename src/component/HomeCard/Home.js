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
            <a href='/' >Contact Us</a>
            <a href='/'>About Us</a>
            <a href='/'>Careers</a>
            <a href='/'>Flipkart Stories</a>
            <a href='/'>Press</a>
            <a href='/'>Flipkart Wholesale</a>
            <a href='/'>Corporate Information</a>
        </div>
        <div>
            <h4>HELP</h4>
            <a href='/'>Payments</a>
            <a href='/'>Shipping</a>
            <a href='/'>Cancellation & Returns</a>
            <a href='/'>FAQ</a>
            <a href='/'>Report Infringement</a>
        </div>
        <div>
            <h4>POLICY</h4>
            <a href='/'>Return Policy</a>
            <a href='/'>Term Of Use</a>
            <a href='/'>Security</a>
            <a href='/'>Privacy</a>
            <a href='/'>Sitemap</a>
            <a href='/'>EPR Compliances</a>
        </div>
        <div>
            <h4>SOCIAL</h4>
            <a href='/'>Facebook</a>
            <a href='/'>Twitter</a>
            <a href='/'>Youtube</a>
            <a href='/'>FAQ</a>
            <a href='/'>Report Infringement</a>
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
        <div className='site'>
        <div>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K' alt='flipkart' />
            <Para as='h4' font='14px' weight='400'>Sell On Flipkart</Para>
        </div>
        <div>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=' alt='Advertise' />
            <Para as='h4' font='14px' weight='400'>Advertise</Para>
        </div>
        <div>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg==' alt='Gift Card' />
            <Para as='h4' font='14px' weight='400'>Gift Card</Para>
        </div>
        <div>
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=' alt='Help' />
            <Para as='h4' font='14px' weight='400'>Help Center</Para>
        </div>
        <div>
            <Para as='h4' color='white' margin='0 10px'>&copy;</Para>
            <Para as='h4' font='14px' weight='400'>2007-2022 Flipkart.com</Para>
        </div>
        <div>
            <img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg' alt='visa' />
        </div>
        </div>
        </div>
    </>)
}

export default Home;