import React from 'react'
import s from './OurHistory.module.css'
import imgOurHistory from '../../assets/banner21.svg'
import img1block from '../../assets/Rectangle848.svg';
import img2block from '../../assets/Rectangle850.svg';
import img3block from '../../assets/Rectangle851.svg';
import imgBeeHive from '../../assets/Ellipse1_history.svg';
import imgBeeHivePhone from '../../assets/Ellipse1_history_phone.svg';
import imgBackroundFlowerPhone from '../../assets/image14.svg';
import imgBackroundFlower from '../../assets/image10.svg';
import imgBackroundFlower11 from '../../assets/image11.svg';
import imgBackroundFlower13 from '../../assets/image14.svg';
import imgBackroundFlower12 from '../../assets/image12.svg';
import imgBackroundFlower14 from '../../assets/image14.svg';

const OurHistoryPage = () => {
  return (
   <>
     <section className={s.section_our_history}>
                    <p className={s.text_our_history}>Наша история</p>
                    <div className={s.div_flex}>
                        <div>
                        <img src={imgOurHistory} alt="beekeeper image" className={s.imgOurHistory} />
                        </div>
                        <div className={s.text_block}>
                        <h3 className={s.eco_text_web}> Высококачественный <span className={s.span_web}>экологический мед в</span>  Кыргызстане. </h3>
                            <h3 className={s.eco_text}> Высококачественный экологический мед в Кыргызстане. </h3>
                            <p className={s.web_p}>Наша компания была основана в 1996 году, хозяйство было начато с 16 семьями пчёл среднерусской породы.
В 2000 году перешли на карпатскую породу пчёл, количество семей около 15.
В 2014 году перешли на породу пчёл карника, и увеличили до 40 семей.
</p>
                                <p className={s.phone_p}>
                                Наша компания была 
                                <span className={s.span_phone}>  основана в 1996 году, </span> 
                                <span className={s.span_phone}>хозяйство было начато </span> с 16 семьями пчёл среднерусской породы.
</p>           
                        </div>
                    </div> 
                    <p className={s.phone_p2}> В 2000 году перешли на карпатскую <span className={s.span_phone}>породу пчёл, количество семей около 15.</span>
                    <span className={s.span_phone}>    
В 2014 году перешли на породу пчёл</span> карника, и увеличили до 40 семей.</p>
                </section>

                <section className={s.block_author}>
    <h3 className={s.text_author}>Пасекой с самого начала занимается   <span className={s.span_phone}>Жуматаев Эрик Аскарбекович.</span>
</h3> 
    <div className={s.div_3blocks}>
      <img src={img1block} alt="image of honey"  className={s.img1block_phone}/>
      <img src={img2block} alt="image of honey" className={s.img2block_phone}/>
      <img src={img3block} alt="image of honey" className={s.img3block_phone} />
    </div>

    <p className={s.text_2020_web}>В 2020 году до 235 семей.
    <span className={s.span_phone}>В 2022 году часть семей перевели на породу пчёл бакфаст 60 семей,</span>
а 50 семей оставили карнику.
<span className={s.span_phone}>До 2022 вся пасека стояла в начале весны в городе Каракуль, в конце 
 </span>весны перевозили в жайлоо Чон-дөбө , которая находится между
 <span className={s.span_phone}>сёлами Бел-Алды и Толук Токтогульского района. С 2022 пасека </span> разделена на 2 части , половина стоит на вышеперечисленных местах, <span className={s.span_phone}> а часть начали ставить в жайлоо Гүдү рядом с селом Сары-булак.</span>
</p>
{/* ------------------------------------------ */}
<p className={s.text_2020_phone}>В 2020 году до 235 семей.
<span className={s.span_phone}> 
В 2022 году часть семей перевели на </span>породу пчёл бакфаст 60 семей, 
<span className={s.span_phone}> а 50 семей оставили карнику. </span>
До 2022 вся пасека стояла в начале 
<span className={s.span_phone}> весны в городе Каракуль, в конце весны </span>
перевозили в жайлоо Чон-дөбө , которая 
<span className={s.span_phone}>  находится между сёлами Бел-Алды и </span>
Толук Токтогульского района. С 2022 
<span className={s.span_phone}> пасека разделена на 2 части , половина </span>
стоит на вышеперечисленных местах, а 
<span className={s.span_phone}> часть начали ставить в жайлоо Гүдү </span>
  рядом с селом Сары-булак.
</p>
<div className={s.text_block_history}> 
     <div className={s.div_text_hive}>
        <p className={s.text_bee_hive1}>ЦЕЛЬ</p>
        <p  className={s.p_hive}>
Наша цель – привить горожанам
желание употреблять только
 настоящий мёд. </p>
         <p className={s.text_bee_hive}>МИССИЯ</p>
        <p  className={s.p_hive}>
Мы стремимся предоставлять 
нашим покупателям наилучшие
продукты кыргызского меда 
изо дня в день. Наш мед – наша гордость.</p>
        <p className={s.text_bee_hive}>ОТВЕСТВЕННОСТЬ</p>
        <p className={s.p_hive}>
Выполняя свои обещания, мы 
всегда стремимся дать нечто большее, чем вы ожидаете. Залог успеха — внимание к деталям.</p>
      </div>
      <img src={imgBeeHive}  className={s.imgBeeHive} alt="image og bee hive" />
      <img src={imgBeeHivePhone} className={s.imgBeeHive_phone} alt="image og bee hive" />
     
      </div> <img src={imgBackroundFlowerPhone} alt="image of flower"  className={s.imgFlowerPhone}/>
      <img src={imgBackroundFlower} alt="image of flower"  className={s.imgFlower_web}/>

      <img src={imgBackroundFlower11} alt="image of flower"  className={s.imgFlower_web11}/>

      <img src={imgBackroundFlower13} alt="image of flower"  className={s.imgFlower_web13}/>

      <img src={imgBackroundFlower12} alt="image of flower"  className={s.imgFlower_web12}/>

       <img src={imgBackroundFlower14} alt="image of flower"  className={s.imgFlower_web14}/>
                </section>
   </>
  )
}

export default OurHistoryPage