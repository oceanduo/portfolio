import './Contact.scss'

import { useState } from 'react';


export default function Contact() {

  const [message,setMessage]=useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id='contact'>
      <div className='background'></div>

      <div className='left'>
        <img src='https://picsum.photos/400/400?random=1' alt=''></img>

      </div>

      <div className='right'>
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='leave your emal here'></input>
          <textarea placeholder='Message'></textarea>
          <button  type='submit'> Send</button>
          
{message && <span> Thanks for your message, I will reply ASAP :) </span>}
        </form>

      </div>
    </div>
  )
}
