import React from 'react';

export default function Card({img,price,name}) {
  return (
    <section className='card'>
    <div className='description'>
    <img alt='item-img' src={img}/>
    </div>
    <div className='label'>
    <h6>{name}</h6>
    <h6>{price}</h6>
    </div>
    <div>
     <button>inc</button>
     <h4>1</h4>
     <button>dec</button>
    </div>
  </section>
  )
}