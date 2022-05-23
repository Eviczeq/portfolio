import React from 'react'
import "./testimonials.scss"
import { useTranslation } from 'react-i18next'

export default function Testimonials() {
  const{ t } = useTranslation(['testimonials']);
  const dataTestimionials = [
    // {
    //   id: 1,
    //   name: "Tom Durden",
    //   title: t('title1'),
    //   img:
    //     "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/twitter.png",
    //   desc:t('desc1')
    // },
    {
      id: 2,
      name: "Paul D'Souza",
      title: t('title2'),
      img:
        "https://drive.google.com/uc?id=1nqhEpklHzmMisC7c60YZqGbC8PjLMpbM",
      icon: "assets/linkedin.png",
      link:"https://jp.linkedin.com/in/pauldsouzaa",
      desc:t('desc2'),
      featured: true,
    },
    // {
    //   id: 3,
    //   name: "Martin Harold",
    //   title: t('title3'),
    //   img:
    //     "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   icon: "assets/youtube.png",
    //   desc:t('desc3')
    // },
  ];
  
  return (
    <div id='testimonials' className='testimonials'>
      <h1>{t('testimonials')}</h1>
      <div className="container">
        {dataTestimionials.map((d)=>(
        <div key={d.id} className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className='left' alt="" />
            <img className='user' src={d.img} alt="" />
            <a rel="noreferrer"  target="_blank"  href={d.link}>
              <img className='right' src={d.icon} alt="" />
            </a>
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}
