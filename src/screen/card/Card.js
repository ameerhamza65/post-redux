import React from 'react'
import { Card } from 'antd';
import './card.css'
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
export default function CardData({title,body,id}) {
  return (
    <div className="site-card-border-less-wrapper">
     <Card title={title} extra={<a><Link to={`/detail/${id}`}>More</Link></a>} style={{ width: '70%' }}>
      {body}
    </Card>
  </div>
  )
}
