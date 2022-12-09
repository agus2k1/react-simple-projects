import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const prevPerson = () => {
    setIndex(index => {
      if (index === 0) {
        return people.length - 1;
      } else {
        return index - 1;
      }
    });
  }

  const nextPerson = () => {
    setIndex(index => {
      if (index === people.length - 1){
        return 0;
      } else {
        return index + 1;
      }
    });
  }

  const randomPerson = () => {
    let randomNumber = Math.round(Math.random() * (people.length - 1));
    if (randomNumber === index){
      randomNumber = index + 1;
      if (randomNumber < 0) {
        randomNumber = people.length - 1;
      } else if (randomNumber > people.length - 1){
        randomNumber = 0;
      }
    }
    setIndex(randomNumber);
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>surprise me</button>
    </article>
  );
};

export default Review;
