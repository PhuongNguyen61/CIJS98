import IconCart from '../../icons/iconCart'
import './style.css'

const GiftItem = (props) => {
    const handleClick = () => {
        alert (`${props.gift.name} - ${Number(props.gift.price).toLocaleString()} VND`)
    }
    return (
        <div className='giftItem' onClick={handleClick}>
            <img src={props.gift.image} alt="" />
            <div className='info'>
                <div className="rowName">
                    <p>{props.gift.name}</p>
                    <IconCart />
                </div>
                <div className="rowPrice">
                    <p className='price'>{Number(props.gift.price).toLocaleString()} VND</p>
                    <p className='saleOff'>-{props.gift.saleOff * 100}%</p>
                </div>
            </div>
        </div>
    )
}

export default GiftItem