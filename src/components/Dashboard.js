import React from 'react'
import Card from './Card'

const Dashboard = ({lists}) => {
  return (
    <div>
      {lists.map((list, i) => <Card key={i} data={list} />)}
    </div>
  )
}

export default Dashboard