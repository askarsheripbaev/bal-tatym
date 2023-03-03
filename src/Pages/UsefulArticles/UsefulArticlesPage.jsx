import React from 'react';
import { useTranslation } from 'react-i18next';
import Butterfly from '../../assets/butterfly.svg'
import ButterflyPhone from '../../assets/butterflyPhone.svg'
import Line5 from '../../assets/Line5.svg';
import Line6 from '../../assets/Line6.svg';
import Line7 from '../../assets/Line7.svg';
import Line8 from '../../assets/Line8.svg';
import Line9 from '../../assets/Line6.svg';
import honeySpoon from '../../assets/honeySpoon.svg';
import HoneyCup from '../../assets/HoneyCup.svg';
import honeySpoonPhone from "../../assets/honeySpoonPhone.svg";
import s from './UsefulArticlesPage.module.css';

const UsefulArticlesPage = () => {
  const { t} = useTranslation();
  return (
    <>
    <section>
      <img src={Line5} className={s.Line5} alt="" />
      <img src={Line6} className={s.Line6} alt=""/>
      <img src={Line7} className={s.Line7} alt=""/>
      <img src={Line8} className={s.Line8} alt=""/>
      <img src={Line9} className={s.Line9} alt=""/>
      <img src={Line9} className={s.Line10} alt=""/>
    <p className={s.useful}>{t("useful-articles")}</p>
    <div className={s.block1}>
    <div className={s.text_block1}>
       <p className={s.benefits}>{t("benefits")}</p>
    <p className={s.benefits_text}>{t("benefits-text")}</p>
    <p className={s.benefits_textPhone1}>{t("benefits-text-phone2")}</p>
    </div>
    <img src={Butterfly} alt="" className={s.butterfly_web} />
    <img src={ButterflyPhone} alt="" 
     className={s.butterfly_phone}/>
   </div>
 <p className={s.benefits_textPhone2}>{t("benefits-text-phone3")}</p>

 <div className={s.block1}>
  <img src={honeySpoon} alt="" className={s.honeySpoon}/>
  <img src={honeySpoonPhone} alt="" className={s.honeySpoon_phone}/>
  <div className={s.how_text_main}>
    <p className={s.how}>{t("howmake-honey")}</p>
    <p className={s.how_text}>{t("howmake-honey-text")}</p>
  </div>
 </div>
 

 <div className={s.block1}>
    <div className={s.text_block1}>
       <p className={s.eat}>{t("eat-honey")}</p>
    <p className={s.eat_text}>{t("eat-honey-text")}</p>
    </div>
    <img src={HoneyCup} alt="" className={s.butterfly_web} />

   </div>

<p className={s.flower_honey}>
{t("flower-honey")}
</p>

  </section>
  </>
  )
}

export default UsefulArticlesPage;