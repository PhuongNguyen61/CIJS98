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
import Image1 from '/public/images/image1.png'
import UserImage1 from '/public/images/userImage1.png'
import UserImage2 from '/public/images/userImage2.png'
import './style.css'

const ModalGift = () => {
    return (
        <div className='modalGift'>
            <div className='content'>
                <div className='top'>
                    <button className='btnDelete'><IconTrash /></button>
                    <button className='btnClose'><IconClose /></button>
                </div>
                <div className='giftInfo'>
                    <div className='overView'>
                        <img src={Image1} alt="" />
                        <div className='info'>
                            <p style={{fontSize:'28px', color:'#383838'}}>Ngũ hạt thập cẩm, hũ trang trí ý nghĩa</p>
                            <div className='rating'>
                                <IconStarFull />
                                <IconStarFull />
                                <IconStarFull />
                                <IconStarEmpty />
                                <IconStarEmpty />
                            </div>
                            <div className='rowPrice'>
                                <p style={{fontSize:'26px', color:'#383838'}}>Giá: 42.000 VND</p>
                                <IconArrowDown />
                                <p style={{fontSize:'14px', fontWeight:'bold', color:'#FF0404'}}>-30%</p>
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
                    <p className='desc'>Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà</p>
                </div>
                <div className='groupNote'>
                    <div className='typeNote'>
                        <div className="rowUserInfo">
                            <img src={UserImage1} alt="" />
                            <p>John Doe</p>
                        </div>
                        <textarea name="" id="">Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nè!</textarea>
                        <div className='groupAction2'>
                            <div className="groupMakeStyle">
                                <IconMakeBold />
                                <IconMakeItalic />
                                <IconMakeLink />
                            </div>
                            <button className='comment'>Comment</button>
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