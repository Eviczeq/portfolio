import React from 'react'
import "./menu.scss"
import { useTranslation } from 'react-i18next';

export default function Menu({menuOpen, setMenuOpen }) {
    const { t } = useTranslation(["menu"]);
  return (
    <div className={'menu ' + (menuOpen && 'active')} onClick={() => setMenuOpen(!menuOpen)}>
        <ul>
            <li>
                <a href="#intro">{t('home')}</a>
            </li>
            <li>
                <a href="#portfolio">{t('portfolio')}</a>
            </li>
            <li>
                <a href="#works">{t('works')}</a>
            </li>
            <li>
                <a href="#testimonials">{t('testimonials')}</a>
            </li>
            <li>
                <a href="#contact">{t('contact')}</a>
            </li>
        </ul>
    </div>
  )
}
