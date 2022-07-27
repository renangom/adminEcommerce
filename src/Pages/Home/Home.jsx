import React from 'react'
import Chart from '../../Components/Chart/Chart'
import FeaturedInfo from '../../Components/FeaturedInfo/FeaturedInfo'
import './home.css'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart />
    </div>
  )
}
