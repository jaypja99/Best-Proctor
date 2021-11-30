import React from 'react';
import './Cards.css';
import CardItem from './CardIteam';


function Cards() {
  return (
    <div className='cards'>
      <h1>Popular Programming Languages</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/python.png'
              text='Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.'
              label='Python'
              path='/private/Subject/python'
              path1='/register'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;