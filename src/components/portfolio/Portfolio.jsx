import React, { useState, useEffect } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from '../../data';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const { t } = useTranslation(["portfolio"]);
  const featuredPortfolio = [
    {
      id: 1,
      title: t('productPage'),
      img:
        "https://drive.google.com/uc?id=1S4kvqI-yG_28YM6mgVYW8SknrZvtw-9a",
      url: "https://kaijinproductcatalog.000webhostapp.com/"
    },
    {
      id: 2,
      title: t('spotify'),
      img: 
      "https://drive.google.com/uc?id=1WlDXYGtuZhBwEa9vNqJTT-fqOVlBHTTA",
      url: "http://my_jammming_spotify.surge.sh/"

    },
    {
      id: 3,
      title: t('ecomerce1'),
      img:
      "https://drive.google.com/uc?id=1kCrs8JnqlEOZ1jqy8Gl01YpEm_qwu-Em",
      url: "https://www.rakuten.ne.jp/gold/tsukijiwadatsumi/"

    },
    {
      id: 4,
      title: t('weather'),
      img:
      "https://drive.google.com/uc?id=1nVhw8D6flKkykxZZRLMiLY5lpjjMGSex",
      url: "https://62845af88846d70bd1f7db1e--vermillion-rugelach-a30504.netlify.app/"

    }
  ];
  
  const webPortfolio = [
    {
      id: 1,
      title: t('productPage'),
      img:
        "https://drive.google.com/uc?id=1S4kvqI-yG_28YM6mgVYW8SknrZvtw-9a",
      url: "https://kaijinproductcatalog.000webhostapp.com/"
    },
    {
      id: 2,
      title: t('spotify'),
      img: 
      "https://drive.google.com/uc?id=1WlDXYGtuZhBwEa9vNqJTT-fqOVlBHTTA",
      url: "http://my_jammming_spotify.surge.sh/"

    },
    {
      id: 3,
      title: t('weather'),
      img:
      "https://drive.google.com/uc?id=1nVhw8D6flKkykxZZRLMiLY5lpjjMGSex",
      url: "https://62845af88846d70bd1f7db1e--vermillion-rugelach-a30504.netlify.app/"

    }
  ];
  
  const mobilePortfolio = [
    {
      id: 1,
      title: t('soon'),
      img:
        "https://drive.google.com/uc?id=1cOPlEe3j30tP3mLQAONxo2ovd3LSHo4t",
      url: "#"
    }
  ];
  
  const designPortfolio = [

    {
      id: 1,
      title: t('ecomerce1'),
      img:
      "https://drive.google.com/uc?id=1kCrs8JnqlEOZ1jqy8Gl01YpEm_qwu-Em",
      url: "https://www.rakuten.ne.jp/gold/tsukijiwadatsumi/"

    }
  ];
  
  const contentPortfolio = [
    {
      id: 1,
      title: t('productPage'),
      img:
        "https://drive.google.com/uc?id=1S4kvqI-yG_28YM6mgVYW8SknrZvtw-9a",
      url: "https://kaijinproductcatalog.000webhostapp.com/"
    },

    
  ];
  const list = [
    {
      key: 0,
      id: 'featured',
      title: t('featured'),
    },
    {
      key: 1,
      id: 'web',
      title: t('web'),
    },
    {
      key: 2,
      id: 'mobile',
      title: t('mobile'),
    },
    {
      key: 3,
      id: 'design',
      title: t('design'),
    },
    {
      key: 4,
      id: 'content',
      title: t('content'),
    },

  ];

useEffect(()=>{
  switch(selected){
    case "featured":
      setData(featuredPortfolio);
      break;
    case "web":
      setData(webPortfolio);
      break;
    case "mobile":
      setData(mobilePortfolio);
      break;
    case "design":
      setData(designPortfolio);
      break;
      case "content":
      setData(contentPortfolio);
    break;
    default:
      setData(featuredPortfolio);
          
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[selected])


  return (
    <div id='portfolio' className='portfolio'>
      <h1>{t('portfolio')}</h1>
      <ul >
        {
          list.map((item) => (
          <PortfolioList 
            key={item.id}
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected} 
            id={item.id}
          />))
        }
      </ul>
      <div className="container">
        {
          data.map((d) => (
            <div key={d.id} className="item">
              <a href={d.url} rel="noreferrer"  target="_blank" ><img src={d.img} alt="" /></a>
              <h3>{d.title}</h3>
          </div>
          ))
        }
 

      </div>
      <div className="blink">
       <a href="#testimonials">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      
    </div>
  )
}
