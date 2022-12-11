import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0){
      amount = 1;
    } else if (count > data.length){
      amount = data.length;
    }

    setText(data.slice(0, amount));
  }

  return (
  <section className='section-center'>
    <h3>lorem ipsum generator</h3>
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>
        paragraphs: 
      </label>
      <input type='number' name='amount' id='amount' placeholder='0' value={count} onChange={(e) => setCount(e.target.value)}/>
      <button type='submit' className='btn'>generate</button>
    </form>
    <article className='lorem-text'>
      {text.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>
      })}
    </article>
  </section>
    )
}

export default App;
