import { useContext, useState } from 'react'
import IconTrash from '../../icons/iconTrash'
import IconClose from '../../icons/iconClose'
import IconStarFull from '../../icons/iconStarFull'
import IconStarEmpty from '../../icons/iconStarEmpty'
import IconArrowDown from '../../icons/iconArrowDown'
import IconMinus from '../../icons/iconMinus'
import IconPlus from '../../icons/iconPlus'
import IconMakeBold from '../../icons/iconMakeBold'
import IconMakeItalic from '../../icons/iconMakeItalic'
import IconMakeLink from '../../icons/iconMakeLink'
import UserImage1 from '/public/images/userImage1.png'
import UserImage2 from '/public/images/userImage2.png'
import { Store } from '../../Store'
import './style.css'

const getRating = {
    1: <div>
    <IconStarFull />
    <IconStarEmpty />
    <IconStarEmpty />
    <IconStarEmpty />
    <IconStarEmpty />
    </div>,
    2: <div>
    <IconStarFull />
    <IconStarFull />
    <IconStarEmpty />
    <IconStarEmpty />
    <IconStarEmpty />
    </div>,
    3: <div>
    <IconStarFull />
    <IconStarFull />
    <IconStarFull />
    <IconStarEmpty />
    <IconStarEmpty />
    </div>,
    4: <div>
    <IconStarFull />
    <IconStarFull />
    <IconStarFull />
    <IconStarFull />
    <IconStarEmpty />
    </div>,
    5: <div>
    <IconStarFull />
    <IconStarFull />
    <IconStarFull />
    <IconStarFull />
    <IconStarFull />
    </div>,
}

const ModalGift = (props) => {
    const [comment, setComment] = useState('')
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }
    const handleSubmit = () => {
        console.log('comment:', comment)
        console.log('name:', props.gift.name)
        setComment('')
    }
    const store = useContext(Store)

    return (
        <div className='modalGift'>
            <div className='content'>
                <div className='top'>
                    <button className='btnDelete' onClick={() => {
                        store.listGift.splice(props.index, 1)
                        store.setListGift([...store.listGift])
                    }}><IconTrash /></button>
                    <button className='btnClose' onClick={props.closeModalGift}><IconClose /></button>
                </div>
                <div className='giftInfo'>
                    <div className='overView'>
                        <img src={props.gift.image} alt="" />
                        <div className='info'>
                            <p style={{fontSize:'28px', color:'#383838'}}>{props.gift.name}</p>
                            {getRating[props.gift.rating]}
                            <div className='rowPrice'>
                                <p style={{fontSize:'26px', color:'#383838'}}>Giá: {Number(props.gift.price).toLocaleString()} VND</p>
                                <IconArrowDown />
                                <p style={{fontSize:'14px', fontWeight:'bold', color:'#FF0404'}}>-{props.gift.saleOff * 100}%</p>
                            </div>
                            <div className='rowType'>
                                <p style={{fontSize:'26px', color:'#383838'}}>Phân loại</p>
                                <div className='listType'>
                                    <button>Nhỏ</button>
                                    <button>Vừa</button>
                                    <button>Lớn</button>
                                </div>
                            </div>
                            <div className='groupAction1'>
                                <div className='amount'>
                                    <button><IconMinus /></button>
                                    <p>0</p>
                                    <button><IconPlus /></button>
                                </div>
                                <button className='btnBuy'>Chọn mua</button>
                            </div>
                        </div>
                    </div>
                    <p className='desc'>{props.gift.desc}</p>
                </div>
                <div className='groupNote'>
                    <div className='typeNote'>
                        <div className="rowUserInfo">
                            <img src={UserImage1} alt="" />
                            <p>John Doe</p>
                        </div>
                        <textarea value={comment} onChange={handleCommentChange} placeholder='Viết bình luận...'></textarea>
                        <div className='groupAction2'>
                            <div className="groupMakeStyle">
                                <IconMakeBold />
                                <IconMakeItalic />
                                <IconMakeLink />
                            </div>
                            <button className='comment' onClick={handleSubmit}>Comment</button>
                        </div>
                    </div>
                    <p style={{fontSize:'26px', fontWeight:'600'}}>Ghi chú</p>
                    <hr />
                    <p style={{fontSize:'18 px', fontWeight:'600', color:'#383838'}}>Danh sách ghi chú</p>
                    <div className='listNote'>
                        <div className="rowUserInfo">
                            <img src={UserImage2} alt="" />
                            <p>You</p>
                        </div>
                        <p className='note'>Lưu lại đã, rồi mấy nữa tính tiếp...</p>
                        <div className='rowTrash'>
                            <p>5 min ago</p>
                            <button className='btnDelete'><IconTrash /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalGift