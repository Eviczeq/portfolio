import './topbar.scss'
import {Person, Mail} from '@mui/icons-material'
import { useTranslation } from 'react-i18next';
import {useEffect} from 'react';
import i18next from 'i18next';
import LanguageIcon from '@mui/icons-material/Language';


export default function Topbar({menuOpen, setMenuOpen }) {


  const { t, i18n } = useTranslation(["topbar"]);

	useEffect(() => {
		if (localStorage.getItem("i18nextLng")?.length > 2) {
			i18next.changeLanguage("en");
		}
	}, []);
// console.log(localStorage.getItem("i18nextLng"))
  const handleLanguageChange = (e) => {

    
		i18n.changeLanguage(e.target.value);
    document.documentElement.lang = e.target.value;
    window.location.reload(false);
  	};

  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>{t('slogan')}</a>
          <div className="itemContainer">
            <Person className='icon' />
            <span>+070 4433 1237</span> 
          </div>          
          <div className="itemContainer">
            <Mail className='icon' />
            <span>k.sienkiewicz94@gmail.com</span> 
          </div>
          <div className="itemContainer">
            <LanguageIcon className='icon' />
          <select
							className="nav-link bg-dark border-0 ml-1 mr-2"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
              
						>
							<option  
              value="en"
              >English</option>
							<option value="jp" 
              >日本語</option>

						</select>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}
