import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef} from 'react';
import { useTranslation } from 'react-i18next';

export default function Intro() {
  const {t} =useTranslation(["intro"])
  let isLoading = true;
  const textRef = useRef(null);
 
  
  useEffect(() => {
    if (textRef.current && isLoading) {
      isLoading = false;
     
        init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,
  
          strings: [t('developer'), t('designer'), t('content')]
        });

    }
  }, []);
    
    //console.log(localStorage.getItem("i18nextLng"))


  return (
    <div id='intro' className='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="selfImage" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>{t('intro')}</h2>
          <h1>Kamil Sienkiewicz</h1>
          <h3>{t('work')} 
            <span  ref={textRef}> </span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
