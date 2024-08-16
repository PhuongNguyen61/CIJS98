import Banner from '/public/images/banner.png'
import './style.css'

const LikeNow = () => {
    return (
        <div className="likeNow">
            <h1>Yêu thích ngay</h1>
            <div className="banner">
                <img src={Banner} alt="" />
                <p>Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có ưu đãi</p>
            </div>
        </div>
    )
}

export default LikeNow