import React, { PureComponent } from 'react'
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {

    const data = [
        {
          name: 'Junho',
          "Active User": 4000,
        },
        {
          name: 'Julho',
          "Active User": 3000,

        },
        {
          name: 'Agosto',
          "Active User": 2000,
        },
        {
          name: 'Setembro',
          "Active User": 2780,
        },
        {
          name: 'Outubro',
          "Active User": 1890,
        },
        {
          name: 'Novembro',
          "Active User": 2390,
        },
        {
          name: 'Dezembro',
          "Active User": 3490,

        },
      ];

  return (
    <div className='chart'>
        <h3 className="chartTitle">Usuários Ativos</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd' />
                <Line type='monotone' dataKey='Active User' stroke='#5550bd' />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
