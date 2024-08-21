import { useContext, useState } from 'react'
import LikeNow from './components/likeNow'
import Filter from './components/filter'
import GiftItem from './components/giftItem'
import Pagination from './components/pagination'
import ModalGift from './components/modalGift'
import ModalCreateGift from './components/modalCreateGift'
import {listGift} from './data'
import { Store } from './Store'
import './App.css'

function App() {
  // modalCreateGift
  const [modalCreateGift, setModalCreateGift] = useState(false)
  const store = useContext(Store)
  const [newGift, setNewGift] = useState({
    name: '',
    image: '',
    rating: '',
    price: '',
    saleOff: '',
    status: '',
    type: '',
    category: '',
    desc: '',
    createdAt: new Date()
  })
  let viewModalCreateGift =null
  if (modalCreateGift) {
    viewModalCreateGift = <ModalCreateGift
    closeModalCreateGift={() => {
      setModalCreateGift(false)}}
    gift={newGift}
    setNewGift={setNewGift}
    onSubmit={(newGift) => {
      store.setListGift([...store.listGift, {
        ...newGift,
        id: new Date().getTime(),
        createdAt: new Date()
      }])
    }}/>
  }

  return (
    <div className='container'>
      {viewModalCreateGift}
      <LikeNow />
      <Filter />
      <div className='groupGiftItem'>
        <div className='rowCreate'>
          <h1>Quà tặng</h1>
          <button onClick={() => {setModalCreateGift(true)}}>Tạo</button>
        </div>
        <div className='gifts'>
          {store.listGift
          // .sort((a, b) => {
          //   return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          // })
          .map((item, idx) => {
            return <div key={item.id} class={`gift${idx+1}`}>
            <GiftItem gift={item} index={idx}/>
            </div>
          })}
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App
