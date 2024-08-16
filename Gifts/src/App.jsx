import { useState } from 'react'
import LikeNow from './components/likeNow'
import Filter from './components/filter'
import GiftItem from './components/giftItem'
import Pagination from './components/pagination'
import ModalGift from './components/modalGift'
import {listGift} from './data'
import './App.css'

function App() {
  const [modalGift, setModalGift] = useState(false)
  let viewModalGift = null
  if (modalGift) {
    viewModalGift = <ModalGift />
  }

  return (
    <div className='container'>
      {viewModalGift}
      <LikeNow />
      <Filter />
      <div className='groupGiftItem'>
        <div className='rowCreate'>
          <h1>Quà tặng</h1>
          <button>Tạo</button>
        </div>
        <div className='gifts'>
          <div class="gift1">
            <GiftItem gift={listGift[0]} openModalGift={setModalGift}/>
          </div>
          <div class="gift2">
            <GiftItem gift={listGift[1]} />
          </div>
          <div class="gift3">
            <GiftItem gift={listGift[2]} />
          </div>
          <div class="gift4">
            <GiftItem gift={listGift[3]} />
          </div>
          <div class="gift5">
            <GiftItem gift={listGift[4]} />
          </div>
          <div class="gift6">
            <GiftItem gift={listGift[5]} />
          </div>
          <div class="gift7">
            <GiftItem gift={listGift[6]} />
          </div>
          <div class="gift8">
            <GiftItem gift={listGift[7]} />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App
