import IconLeft from "../../icons/iconLeft"
import IconRight from "../../icons/iconRight"
import './style.css'

const Pagination = () => {
    return (
        <div className="pagination">
            <IconLeft />
            <div className="center">
                <div className="pages">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
                <div className="morePages">...</div>
            </div>
            <IconRight />
        </div>
    )
}

export default Pagination