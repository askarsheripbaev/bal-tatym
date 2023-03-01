import React from 'react'
import { useTranslation } from 'react-i18next';
import OurHistory from '../../assets/banner21.svg'
import block1 from '../../assets/Rectangle848.svg';
import block2 from '../../assets/Rectangle850.svg';
import block3 from '../../assets/Rectangle851.svg';
import BeeHive from '../../assets/Ellipse1_history.svg';
import BeeHivePhone from '../../assets/Ellipse1_history_phone.svg';
import BackroundFlowerPhone from '../../assets/image14.svg';
import BackroundFlower from '../../assets/image10.svg';
import BackroundFlower11 from '../../assets/image11.svg';
import BackroundFlower13 from '../../assets/image14.svg';
import BackroundFlower12 from '../../assets/image12.svg';
import BackroundFlower14 from '../../assets/image14.svg';
import s from './OurHistory.module.css';

const OurHistoryPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={s.section_our_history}>
        <p className={s.text_our_history}>{t("our-story")}</p>
        <div className={s.div_flex}>
          <div>
            <img src={OurHistory} alt="beekeeper image" className={s.OurHistory} />
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
          <img src={block1} alt="honey" className={s.block1_phone} />
          <img src={block2} alt="honey" className={s.block2_phone} />
          <img src={block3} alt="honey" className={s.block3_phone} />
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
          <img src={BeeHive} className={s.BeeHive} alt="image og bee hive" />
          <img src={BeeHivePhone} className={s.BeeHive_phone} alt="image og bee hive" />

        </div> <img src={BackroundFlowerPhone} alt="image of flower" className={s.FlowerPhone} />
        <img src={BackroundFlower} alt="image of flower" className={s.Flower_web} />

        <img src={BackroundFlower11} alt="image of flower" className={s.Flower_web11} />

        <img src={BackroundFlower13} alt="image of flower" className={s.Flower_web13} />

        <img src={BackroundFlower12} alt="image of flower" className={s.Flower_web12} />

        <img src={BackroundFlower14} alt="image of flower" className={s.Flower_web14} />
      </section>
    </>
  )
}

export default OurHistoryPage