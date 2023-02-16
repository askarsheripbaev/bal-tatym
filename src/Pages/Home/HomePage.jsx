import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
} from "react-router-dom";
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
    return (
        <>
            <section className={s.main_block}>
                <div className={s.phone_div}>
                    <h4 className={s.h4}>Прямиком из
                        <span className={s.span_web}> пчелиных</span>
                        ульев</h4>
                    <p className={s.textP2}>Максимальная польза для <span className={s.span_web}>вашего здоровья!</span>  </p>

                    <h2 className={s.h2}>Прямиком из пчелиных ульев</h2>
                    <p className={s.textP}>Максимальная польза вашего здоровья! </p>
                    <div className={s.box_call}>
                        <a href="tel:+79146089174" className={s.href_call}>Связаться <img src={imgWhatsApp} alt="image of WhatsApp " className={s.img_call} /></a>
                    </div>

                    {/* версия для телефона */}
                    <div className={s.box_call_phone}>
                        <a href="tel:+79146089174" className={s.href_call_phone}>Связаться <img src={imgWhatsApp} alt="image of WhatsApp " className={s.img_call_phone} /></a>
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
                    <p className={s.text_our_history}>Наша история</p>
                    <div className={s.div_flex}>
                        <div>
                            <img src={imgOurHistory} alt="beekeeper image" className={s.imgOurHistory} /></div>
                        <div className={s.text_block}>
                            <h3 className={s.eco_text_web}> Высококачественный <span className={s.span_web}>экологический мед в</span>  Кыргызстане. </h3>
                            <h3 className={s.eco_text}> Высококачественный экологический мед в Кыргызстане. </h3>
                            <p className={s.web_p}>Наша компания была основана в 1996 году, хозяйство было начато
                                c 16 семьями пчёл среднерусской породы...</p>
                            <p className={s.phone_p}>Наша компания была <span className={s.span_phone}> основана в 1996 году, </span>хозяйство...</p>
                             <Router>
                            <Link to="/our-history">
                                <div className={s.box_more}> <p className={s.text_more}>Подробнее </p>
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
<p className={s.text_our_history}>Наши клиенты</p>
<div className={s.div_reviews}>
    <img src={imgPic1}  alt=""  className={s.imgPic1} />
    <img src={imgPic1Phone}  alt=""  className={s.imgPic1Pnone} />
    <div  className={s.div_reviews2}>
        <p className={s.name_reviews}>Камилла Сафарова</p>
    <p className={s.p_reviews}>Люблю чай с медом</p>
    <p  className={s.p_reviews2}>Покупаю мед уже как 5 лет у Пчёлки. Очень 
    <span className={s.span_phone1}>довольна продукцией за качество и цена у них </span>
      довольно доступная. Рекомендую!</p>
    </div>  
 </div>
 <div className={s.div_reviews}> 
    <div className={s.div_reviews21}>
        <p className={s.name_reviews}>Сергей Дадыбаев</p>
    <p className={s.p_reviews}>Любимый мед моей бабушки</p>
    <p className={s.p_reviews2}>Бабушка обожает мед, мой выбор пал на мед 
    <span className={s.span_phone1}>компании Пчелка. Она просто без ума от него. </span>
    <span className={s.span_phone1}>Доверяю свой выбор только им и к тому же</span>  цены классные. Спасибо)</p>
    </div>  
    <img src={imgPic2}  className={s.imgPic2} alt="" />
 </div>
 <img src={img11} alt="" className={s.img11}/>

</section>

            
        </>
    );
};


export default HomePage;