import React, { useState} from 'react';
import  './contact.scss';
import { send } from 'emailjs-com'
import { useTranslation } from 'react-i18next';
export default function Contact() {
  const { t } = useTranslation(['contacts']);
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const [message, setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
    send(
      'service_knx4uyl',
      'template_eq2m23f',
      toSend,
      'dIi-YRKl0C5ISDeIq'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
      setToSend({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      })
  }
  return (
    <div id='contact' className='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>{ t('contact') }</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder={ t('from') }
          name='from_name'
          value={toSend.from_name}
          onChange={handleChange}
          />
          <input
            hidden
            type='text'
            name='to_name'
            placeholder='to name'
            value={toSend.to_name}
            onChange={handleChange}
          />
          <textarea 
          placeholder={ t('message') }
          value={toSend.message}
          onChange={handleChange}
          name='message'
          ></textarea>
          <input
            type='text'
            name='reply_to'
            placeholder={ t('mail') }
            value={toSend.reply_to}
            onChange={handleChange}
          />

          <button type='submit'>{ t('send') }</button>
          {message && <span>{ t('sendReply') }</span>}
        </form>
      </div>
    </div>
  )
}
