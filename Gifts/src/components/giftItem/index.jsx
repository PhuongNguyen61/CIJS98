import { useState } from 'react'
import IconCart from '../../icons/iconCart'
import ModalGift from '../modalGift'
import './style.css'

const GiftItem = (props) => {
    const [modalGift, setModalGift] = useState({
        open: false,
        data: null
      })
      let viewModalGift = null
      if (modalGift.open) {
        viewModalGift = <ModalGift gift={modalGift.data} index={props.index} closeModalGift={() => {
          setModalGift({
            open: false,
            data: null
          })
        }} />
      }
    const handleClick = () => {
        setModalGift({
            open: true,
            data: props.gift
          })
    }

    return (
        <>
            {viewModalGift}
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
        </>
    )
}

export default GiftItem