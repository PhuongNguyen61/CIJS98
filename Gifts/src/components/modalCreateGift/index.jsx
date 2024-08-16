import './style.css'
import IconClose from '../../icons/iconClose'

const ModalCreateGift = (props) => {
    const handleChange = (e) => {
        props.gift[e.target.name] = e.target.value
        props.setNewGift({
            ...props.gift
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.closeModalCreateGift();
        console.log(props.gift);
    }
    return (
        <div className='modalCreateGift'>
            <div className="content">
                <div className='top'>
                    <h1>Thêm thông tin quà tặng</h1>
                    <button className='btnClose' onClick={props.closeModalCreateGift}><IconClose /></button>
                </div>
                <div>
                    <form className='formCreateGift' onSubmit={handleSubmit}>
                        <div className='row'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' value={props.gift.name} name='name' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="image">Hình ảnh</label>
                            <input type="text" id='image' value={props.gift.image} name='image' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="rating">Đánh giá</label>
                            <input type="number" id='rating' max={5} min={0} value={props.gift.rating} name='rating' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="price">Giá</label>
                            <input type="text" id='price' value={props.gift.price} name='price' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="saleOff">Giảm giá</label>
                            <input type="text" id='saleOff' value={props.gift.saleOff} name='saleOff' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="status">Trạng thái</label>
                            <input type="text" id='status' value={props.gift.status} name='status' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="type">Phân loại</label>
                            <input type="text" id='type' value={props.gift.type} name='type' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="category">Danh mục</label>
                            <input type="text" id='category' value={props.gift.category} name='category' onChange={handleChange}/>
                        </div>
                        <div className='row'>
                            <label htmlFor="desc">Mô tả</label>
                            <input type="text" id='desc' value={props.gift.desc} name='desc' onChange={handleChange}/>
                        </div>
                        <button className='btnSave'>Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalCreateGift