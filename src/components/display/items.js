import React from 'react';
import Card from './item-card'
import { storeData } from '../../api'
export default function items() {
  return (
    <section>
    {storeData.map(item=>{
    return <Card key={item.id} id={item.id} name={item.name} price={item.price} img={item.img}/>
    })}
  </section>
  )
}