import React from 'react';
import  './about.scss';
import { useTranslation } from 'react-i18next';
export default function Contact() {
  const { t } = useTranslation(["about"]);

  const list = [
    {
      id:1,
      title: 'React',
    },
    {
      id:2,
      title: 'JavaScript (ES6+)',
    },
    
    {
      id:4,
      title: 'WordPress',
    },
    {
      id:5,
      title: 'PHP',
    },
    {
      id:6,
      title: 'HTML',
    },
    {
      id:7,
      title: 'SASS',
    },
    {
      id:8,
      title: 'CSS',
    },
    {
      id:9,
      title: 'MySQL'
    }
  ]
  return (
    <div id='about' className='about'>
      <div className="left">
        <div className="container">
          <div className="cart">

            {
              list.map((item)=>(
                <div  className="item" key={item.id}>
                  {item.title}
              </div >
              ))
            }          
            </div>
          </div>
      </div>
      <div className="right">
        <h2>{t('about')}</h2>
            <div className="centerTxt">
              <span>
                {t('span1')}
              </span>
              <span>
                {t('span2')}
              </span>
              <span>
                {t('span3')}
              </span>
            </div>
            <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
