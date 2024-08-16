import IconSearch from '../../icons/iconSearch'
import IconBar from '../../icons/IconBar'
import IconDown from '../../icons/IconDown'
import './style.css'

const Filter = () => {
    return (
        <div className='filter'>
            <h1>Mục yêu thích của bạn</h1>
            <div className='rowInput'>
                <IconSearch />
                <input type="text" placeholder='Tìm kiếm'/>
            </div>
            <div className='filterByCondition'>
                <div className='rowSelect'>
                    <select name="" id="">
                        <option value="">Trạng thái</option>
                        <option value="">Đang bán</option>
                        <option value="">Hết hàng</option>
                        <option value="">Ngưng Bán</option>
                    </select>
                    <IconDown />
                </div>
                <div className='rowSelect'>
                    <select name="" id="">
                        <option value="">Danh mục</option>
                        <option value="">Rượu</option>
                        <option value="">Hạt</option>
                        <option value="">Trà</option>
                    </select>
                    <IconDown />
                </div>
                <div className='rowSelect'>
                    <select name="" id="">
                        <option value="">Đã thêm gần đây</option>
                        <option value="">Gần đây</option>
                        <option value="">Cũ nhất</option>
                    </select>
                    <IconDown />
                </div>
                <IconBar />
            </div>
        </div>
    )
}

export default Filter