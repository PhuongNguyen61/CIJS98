import { useState } from 'react'
import LikeNow from './components/likeNow'
import Filter from './components/filter'
import GiftItem from './components/giftItem'
import Pagination from './components/pagination'
import './App.css'

function App() {
  return (
    <div className='container'>
      <LikeNow />
      <Filter />
      <div className='groupGiftItem'>
        <div className='rowCreate'>
          <h1>Quà tặng</h1>
          <button>Tạo</button>
        </div>
        <div className='gifts'>
          <div class="gift1">
            <GiftItem />
          </div>
          <div class="gift2">
            <GiftItem />
          </div>
          <div class="gift3">
            <GiftItem />
          </div>
          <div class="gift4">
            <GiftItem />
          </div>
          <div class="gift5">
            <GiftItem />
          </div>
          <div class="gift6">
            <GiftItem />
          </div>
          <div class="gift7">
            <GiftItem />
          </div>
          <div class="gift8">
            <GiftItem />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}

export default App
