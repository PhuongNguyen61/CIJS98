import Image1 from "/public/images/image1.png"
import IconCart from '../../icons/iconCart'
import './style.css'

const GiftItem = () => {
    return (
        <div className='giftItem'>
            <img src={Image1} alt="" />
            <div className='info'>
                <div className="rowName">
                    <p>Granola siêu hạt ăn kiêng 15% yến mạch</p>
                    <IconCart />
                </div>
                <div className="rowPrice">
                    <p className='price'>133.000 VND</p>
                    <p className='saleOff'>-99%</p>
                </div>
            </div>
        </div>
    )
}

export default GiftItem