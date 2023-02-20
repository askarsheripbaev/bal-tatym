import React from 'react'
import { useTranslation } from 'react-i18next';
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
import s from './OurHistory.module.css';

const OurHistoryPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={s.section_our_history}>
        <p className={s.text_our_history}>{t("our-story")}</p>
        <div className={s.div_flex}>
          <div>
            <img src={imgOurHistory} alt="beekeeper image" className={s.imgOurHistory} />
          </div>
          <div className={s.text_block}>
            <h3 className={s.eco_text_web}> 
            {t("high-quality")}
            </h3>
            <h3 className={s.eco_text}> {t("high-quality")}</h3>
            <p className={s.web_p}>
              {t("our-storyall")}
            </p>
            <p className={s.phone_p}>
              {t("our-storyallPhone")}
            </p>
          </div>
        </div>
        <p className={s.phone_p2}> 
        {t("our-storyallPhone2")}
            </p>
      </section>

      <section className={s.block_author}>
        <h3 className={s.text_author}>
          {t("eric")}
        </h3>
        <div className={s.div_3blocks}>
          <img src={img1block} alt="image of honey" className={s.img1block_phone} />
          <img src={img2block} alt="image of honey" className={s.img2block_phone} />
          <img src={img3block} alt="image of honey" className={s.img3block_phone} />
        </div>

        <p className={s.text_2020_web}>
          {t("in2020")}
        </p>
        {/* ------------------------------------------ */}
        <p className={s.text_2020_phone}>
          {t("in2020")}
        </p>
        <div className={s.text_block_history}>
          <div className={s.div_text_hive}>
            <p className={s.text_bee_hive1}>
              {t("purpose")}
              </p>
            <p className={s.p_hive}>
            {t("purpose-text")}
              </p>
            <p className={s.text_bee_hive}>
            {t("mision")}
            </p>
            <p className={s.p_hive}>
            {t("mision-Text")}
              </p>
            <p className={s.text_bee_hive}>
             {t("responsibility")}
              </p>
            <p className={s.p_hive}>
              {t("responsibilityText")}
              </p>
          </div>
          <img src={imgBeeHive} className={s.imgBeeHive} alt="image og bee hive" />
          <img src={imgBeeHivePhone} className={s.imgBeeHive_phone} alt="image og bee hive" />

        </div> <img src={imgBackroundFlowerPhone} alt="image of flower" className={s.imgFlowerPhone} />
        <img src={imgBackroundFlower} alt="image of flower" className={s.imgFlower_web} />

        <img src={imgBackroundFlower11} alt="image of flower" className={s.imgFlower_web11} />

        <img src={imgBackroundFlower13} alt="image of flower" className={s.imgFlower_web13} />

        <img src={imgBackroundFlower12} alt="image of flower" className={s.imgFlower_web12} />

        <img src={imgBackroundFlower14} alt="image of flower" className={s.imgFlower_web14} />
      </section>
    </>
  )
}

export default OurHistoryPage