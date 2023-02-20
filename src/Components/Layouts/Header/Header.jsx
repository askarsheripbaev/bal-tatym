import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../Language/18n';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import logo from '../../../assets/logo.svg';
import Home from '../../../assets/home.svg';
import imgCall from '../../../assets/call.svg';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Person from '../../../assets/person.svg';
import ShoppingCart from '../../../assets/local_mall.svg';
import UsefulArticles from '../../../assets/emoji_objects.svg';
import Products from '../../../assets/filter_frames.svg';
import USA from '../../../assets/flag.svg';
import Russia from '../../../assets/flagRussia.svg';
import s from './Header.module.css'; // стили

const Header = () => {
  const [header, setHeader] = useState(false);

  // for language 
  const { t, i18} = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Router>
      <header className={s.header}>
        <div className='container'>
          <div className={s.box}>
            <div className={s.logo_image}>
              <Link to="/"><img src={logo} alt="image of logo Bal Tatym" className='logo-img' />
              </Link>
            </div>
            <ul
              className={
                header ? [s.menu, s.active].join(' ') : [s.menu]}>
              <div className={s.logo_div}>
                <img src={logo} alt="image of logo" className={s.logo_img_phone} />
              </div>
              <li>
                <Link to="/" className={s.link_home2}>
                  <img src={Home} className={s.img_home} alt="img of home" />
                  <p>{t('home-page-header')}</p>
                </Link>
              </li>
              <li>
                <Link className={s.link_products} to='/products'>
                  <img src={Products} className={s.img_home} alt="img of home" />
                  <p>{t('products-header')}</p>
                </Link>
              </li>
              <li>
                <Link className={s.link_useful_articles} to='/useful-articles'>
                  <img src={UsefulArticles} className={s.img_home} alt="img of home" />
                  <p>{t('articles-header')}</p>
                </Link>
              </li>
              <li>
                <Link to='/contacts' className={s.link_contacts}>
                  <img src={imgCall} className={s.img_home} alt="img of home" />
                  <p>{t('contacts-header')}</p>
                </Link>
              </li>
              {/* ----------------------------------------- это в декстоп версии */}

              <div className={s.div_wrapper}>
                <li className={s.button_language_web}>
                  {/* change language */}
                  <img src={USA} alt="" onClick={() => changeLanguage('en')} className={s.imgLanguageUSA}/>
                  <img src={Russia} alt="" onClick={() => changeLanguage('ru')} className={s.imgLanguageRu}/>
                  </li>
                <li className={s.li_cart}>
                  <Link to='/shopping-cart' className={s.link_cart_image}>
                    <img src={ShoppingCart} alt="img of home" />
                  </Link>
                  <Link to='/shopping-cart' className={s.link_cart_text}>
                    <p>{t('shopping-cart-header')}</p>
                  </Link>
                </li>
                <li className={s.li_profile}>
                  <Link to='/profile-page' className={s.link_profile_img}>
                    <img src={Person} alt="img of home" />
                  </Link>
                  <Link to='/profile-page' className={s.link_profile_text}>
                    <p>{t('profile-header')}</p>
                  </Link>
                </li>
              </div>
              {/* ----------------------------------------- */}
              {/* это версия в телефоне */}
              <li>
                <Link className={s.link_cart_phone} to='/shopping-cart'>
                  <img src={ShoppingCart} className={s.img_home} alt="img of home" />
                  <p>{t("shopping-cart-header")}</p>
                </Link>
              </li>
              <li>
                <Link to='/profile-page' className={s.link_cart_phone}>
                  <img src={Person} className={s.img_home} alt="img of home" />
                  <p>{t("profile-header")}</p>
                </Link>
              </li>
              <li className={s.button_language_phone}>
              <img src={USA} alt="" onClick={() => changeLanguage('en')} className={s.imgLanguageUSA_phone}/>
                  <img src={Russia} alt="" onClick={() => changeLanguage('ru')} className={s.imgLanguageRu_phone}/>
              </li>
            </ul>
            <div onClick={() => setHeader(!header)} className={s.mobile_btn}>
              {header ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
              {/*  AiOutlineClose это иконка закрыть, AiOutlineMenu а это иконка бургер меню */}
            </div>
          </div>
        </div>
      </header>
   </Router>
  )
}

export default Header