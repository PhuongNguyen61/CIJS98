import { useState } from 'react'
import LikeNow from './components/likeNow'
import Filter from './components/filter'
import GiftItem from './components/giftItem'
import Pagination from './components/pagination'
import ModalGift from './components/modalGift'
import ModalCreateGift from './components/modalCreateGift'
import {listGift} from './data'
import './App.css'

function App() {
  // modalGift
  const [modalGift, setModalGift] = useState({
    open: false,
    data: null
  })
  let viewModalGift = null
  if (modalGift.open) {
    viewModalGift = <ModalGift gift={modalGift.data} closeModalGift={() => {
      setModalGift({
        open: false,
        data: null
      })
    }} />
  }

  // modalCreateGift
  const [modalCreateGift, setModalCreateGift] = useState(false)
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
    setNewGift={setNewGift}/>
  }

  return (
    <div className='container'>
      {viewModalCreateGift}
      {viewModalGift}
      <LikeNow />
      <Filter />
      <div className='groupGiftItem'>
        <div className='rowCreate'>
          <h1>Quà tặng</h1>
          <button onClick={() => {setModalCreateGift(true)}}>Tạo</button>
        </div>
        <div className='gifts'>
          <div class="gift1">
            <GiftItem gift={listGift[0]} openModalGift={setModalGift} />
          </div>
          <div class="gift2">
            <GiftItem gift={listGift[1]} openModalGift={setModalGift} />
          </div>
          <div class="gift3">
            <GiftItem gift={listGift[2]} openModalGift={setModalGift} />
          </div>
          <div class="gift4">
            <GiftItem gift={listGift[3]} openModalGift={setModalGift} />
          </div>
          <div class="gift5">
            <GiftItem gift={listGift[4]} openModalGift={setModalGift} />
          </div>
          <div class="gift6">
            <GiftItem gift={listGift[5]} openModalGift={setModalGift} />
          </div>
          <div class="gift7">
            <GiftItem gift={listGift[6]} openModalGift={setModalGift} />
          </div>
          <div class="gift8">
            <GiftItem gift={listGift[7]} openModalGift={setModalGift} />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App
