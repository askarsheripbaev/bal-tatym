import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import imgHand from '../../assets/image18.svg';
import imgWhatsApp from '../../assets/Subtract.svg';
import imgHoney from '../../assets/Ellipse4.svg';
import imgOurHistory from '../../assets/banner2.svg';
import imgHoney2 from '../../assets/imageof1block.svg';
import imgLine7 from '../../assets/Line7.1.svg';
import img13 from '../../assets/image13.1.svg';
import imgPic1 from '../../assets/pic1.svg';
import imgPic2 from '../../assets/pic2.svg';
import imgPic1Phone from '../../assets/pic1.1.svg';
import img11 from '../../assets/image11.1.svg';
import s from './HomePage.module.css';
import OurHistoryPage from '../OurHistory/OurHistoryPage.jsx';

const HomePage = () => {
    const { t} = useTranslation();
    return (
        <>
            <section className={s.main_block}>
                <div className={s.phone_div}>
                    <h4 className={s.h4}>
                        {t("text-straight")}
                        </h4>
                    <p className={s.textP2}>
                    {t("text-p")}
                        </p>

                       
                    <h2 className={s.h2}> {t("text-straight")}</h2>
                    <p className={s.textP}> {t("text-p")}</p>
                    <div className={s.box_call}>
                        <a href="tel:+79146089174" className={s.href_call}>{t("contact-us")}
                        <img src={imgWhatsApp} alt="image of WhatsApp " className={s.img_call} /></a>
                    </div>

                    {/* версия для телефона */}
                    <div className={s.box_call_phone}>
                        <a href="tel:+79146089174" className={s.href_call_phone}>{t("contact-us")}
                        <img src={imgWhatsApp} alt="image of WhatsApp " className={s.img_call_phone} /></a>
                    </div>
                </div>
                <img src={imgHand} alt="" className={s.imgHand_web} />
                <img src={imgHoney2} alt="" className={s.imgHand_web2} />
                <img src={imgLine7} alt="image of a line" className={s.imgLine7} />
                <img src={img13} alt="image of flower"  className={s.img13}/>
                <img src={imgHoney} alt="image of honey" className={s.imgHoney_phone} />
            </section>
            {/* third block after catalog  */ }         
                <section className={s.section_our_history}>
                    <p className={s.text_our_history}>{t("our-story")}</p>
                    <div className={s.div_flex}>
                        <div>
                            <img src={imgOurHistory} alt="beekeeper image" className={s.imgOurHistory} /></div>
                        <div className={s.text_block}>
                            <h3 className={s.eco_text_web}>
                            {t("high-quality")}            
                                 </h3>
                            <h3 className={s.eco_text}>   {t("high-quality")} </h3>
                            <p className={s.web_p}> {t("our-company-web")}</p>
                            <p className={s.phone_p}> {t("our-company-phone")}
                                </p>
                             <Router>
                            <Link to="/our-history">
                                <div className={s.box_more}> <p className={s.text_more}> 
                            {/* Подробнее      */}
                                {t("read-more")}
                                </p>
                                </div>
                            </Link>
                            <Switch>
                    <Route path="/our-history" element={OurHistoryPage}></Route>
                </Switch>
</Router>
                        </div>
                    </div>
                </section>
                
<section className={s.section_reviews}>
<p className={s.text_our_history}>{t("our-clients")}</p>
<div className={s.div_reviews}>
    <img src={imgPic1}  alt=""  className={s.imgPic1} />
    <img src={imgPic1Phone}  alt=""  className={s.imgPic1Pnone} />
    <div  className={s.div_reviews2}>
        <p className={s.name_reviews}>{t("camila")}</p>
    <p className={s.p_reviews}>
    {t("love-tea")}
        </p>
    <p  className={s.p_reviews2}>
    {t("liked-product")}
      </p>
    </div>  
 </div>
 <div className={s.div_reviews}> 
    <div className={s.div_reviews21}>
        <p className={s.name_reviews}>
        {t("sergey")}
            </p>
    <p className={s.p_reviews}>
    {t("love-honey")}
        </p>
    <p className={s.p_reviews2}>
    {t("grandma")}
    </p>
    </div>  
    <img src={imgPic2}  className={s.imgPic2} alt="" />
 </div>
 <img src={img11} alt="" className={s.img11}/>
</section>
        </>
    );
};


export default HomePage;