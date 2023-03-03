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
import Line6 from '../../assets/Line6.svg';
import Line10 from '../../assets/Line10.svg';
import img10 from '../../assets/image10.svg';
import img13 from '../../assets/image13.1.svg';
import img6 from '../../assets/image6.svg';
import imgPic1 from '../../assets/pic1.svg';
import imgPic2 from '../../assets/pic2.svg';
import imgPic1Phone from '../../assets/pic1.1.svg';
import imgPic2Phone from '../../assets/pic1Phone.svg';
import beeKeeper from '../../assets/Ellipse18.svg'
import HoneyCup from '../../assets/Ellipse17.svg'
import img11 from '../../assets/image11.1.svg';
import img9 from '../../assets/image9.svg';
import img15 from '../../assets/image15.svg';
import s from './HomePage.module.css';
import OurHistoryPage from '../OurHistory/OurHistoryPage.jsx';
import UsefulArticlesPage from '../UsefulArticles/UsefulArticlesPage.jsx';

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
             <img src={img6} className={s.img6} alt="" />
                <img src={imgHoney} alt="image of honey" className={s.imgHoney_phone} />
            </section>
             {/* third block after catalog          */}
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
                                <div className={s.box_more}><p className={s.text_more}> 
                            {/* Подробнее      */}
                                {t("read-more")}
                                </p>
                                </div>
                            </Link>
                            <Switch>
                    <Route exact path="/our-history" element={OurHistoryPage}></Route>
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
    <img src={imgPic2Phone}  className={s.image_client} alt="" />
 </div>
 <img src={img11} alt="" className={s.img11}/>
 <img src={img11} alt="" className={s.img11_second}/>
 <img src={Line6} alt="" className={s.Line6} />

</section>
  <section>
  <p className={s.useful}>{t("useful-articles")}</p>
  <div className={s.block1}>
    <div className={s.text_block1}>
       <p className={s.eat}>{t("benefits")}</p>
    <p className={s.eat_text}>{t("is-bee")}</p>
    <Router>
              <Link to="/useful-articles" className={s.link_useful}>
                                {t("read-more")}
                 </Link>
                            <Switch>
                    <Route path="/useful-articles" element={<UsefulArticlesPage />}></Route>
                </Switch>
</Router> 
</div>
   <img src={HoneyCup} alt=""  className={s.butterfly_web}/>
   </div>
   <img src={img9} alt="" className={s.img9}/>
   <img src={img15} alt="" className={s.img15}/>
   
 </section>

<section> 
    <div className={s.last_block}>
  <img src={beeKeeper} alt="" className={s.honeySpoon}/>
  <div className={s.how_text_main}>
    <p className={s.how}>{t("how-honey-made")}</p>
    <p className={s.how_text}>{t("how-honey-made_text")}</p>
    <Router>
              <Link to="/useful-articles" className={s.link_useful2}>
                                {t("read-more")}
                 </Link>
                            <Switch>
                    <Route path="/useful-articles" element={<UsefulArticlesPage />}></Route>
                </Switch>
</Router>
  </div>
 </div>
 <img src={Line10} alt=""  className={s.Line10}/>
 <img src={img10} alt=""  className={s.img10}/>
 </section>
  
 
        </>
    );
};


export default HomePage;