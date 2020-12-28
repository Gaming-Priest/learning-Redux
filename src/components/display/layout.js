import React from 'react';
export default function Layout(props) {
  return (
    <section>
        {props.children}
        <hr/>
      <section className='total'>
      <h4>total</h4>
      <h4>0</h4>
      </section>
      <section className='btn-cont'>
      <button className='btn-clear-bag'>clear bag</button>
      </section>  
  </section>
  )
}