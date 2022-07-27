import React from 'react'
import './featured.css'
import {ArrowDownward, ArrowUpward} from "@mui/icons-material"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$2,415</span>
                <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative' /></span>
            </div>
            <span className="featuredSub">Comparado com o último mês</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Vendas</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$4,415</span>
                <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative' /></span>
            </div>
            <span className="featuredSub">Comparado com o último mês</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Custo</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$4,415</span>
                <span className="featuredMoneyRate">11.4 <ArrowUpward className='featuredIcon' /></span>
            </div>
            <span className="featuredSub">Comparado com o último mês</span>
        </div>
    </div>
  )
}
