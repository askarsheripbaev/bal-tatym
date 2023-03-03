import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import distance from '../../assets/distance.svg';
import flower from '../../assets/image14.svg';
import s from './ContactsPage.module.css';
import call1 from '../../assets/call1.svg'


const ContactsPage = () => {
  const [formvalue, setFormvalue] = useState({ name: '', email: '', address: '' });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);
  const [textMessage, setTextMessage] = useState(false)
  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);

  }
  const validationform = (value) => {
    const errors = {};
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!value.name) {
      errors.name = t('enter-name');
    }

    if (!value.email) {
      errors.email = t('enter-email');
    } else if (!emailPattern.test(value.email)) {
      errors.email = t('enter-email');
    }
    if (!value.address) {
      errors.address = t('enter-message');;
    }
    return errors;
  }
  useEffect(() => {

    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
    }
  }, [formerror, formvalue, issubmit]);

  const { t } = useTranslation();

  const Submit = () => {
    if (Object.keys(formerror).length === 0 && issubmit) {
    } else return
  }
  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      setTextMessage(true)
    } else return
  }, [Submit])


  return (
    <>
      <div className={s.block_contact}>
        <p className={s.contacts}>
          {t("contacts")}
          </p>

        <div className={s.main_block}>
          <div>
            <div className={s.block}>
              <img
                src={call1}
                className={s.call_img}
              />
              <div className={s.number}>
                <div className={s.box_what}>
                  <a href="tel:+996779454233"
                    className={s.what}>
                    +996 (779) 454 233
                  </a>
                </div>
                <a
                  href="tel:+79146089174"
                  className={s.telegram}>
                  +79146089174
                </a>
              </div>
            </div>
            <div className={s.distance}>
              <img 
              src={distance}
              className={s.img_distance}
               />
              <div className={s.box_distance}>
                <a 
                className={s.distance_href} 
                target="_blank" href="https://www.google.com/maps/place/%D0%A2%D0%BE%D0%BA%D1%82%D0%BE%D0%B3%D1%83%D0%BB/@41.8727148,72.946834,14.04z/data=!4m6!3m5!1s0x38a25886445955e1:0x3bfafee6585a6b94!8m2!3d41.8760133!4d72.9401509!16zL20vMDcyMmJ6">
                  {t("adress-honey")}
                  </a>
                  </div>
            </div>
          </div>

          <form onSubmit={handlesubmit} className={s.form}> <p className={s.write_us}>{t("write-us")}</p>

            <input
              type="text"
              className={s.name}
              name="name"
              value={formvalue.name}
              onChange={handlevalidation}
              placeholder={t("name")}
            />
            <span
              className={s.message_error}>
              {formerror.name}
            </span>


            <input
              type="text"
              className={s.email}
              name="email"
              value={formvalue.email}
              onChange={handlevalidation}
              placeholder={t("email")}
            />
            <span
              className=
              {s.message_error}>
              {formerror.email}
            </span>

            <textarea
              className={s.message}
              name="address"
              value={formvalue.address}
              onChange={handlevalidation}
              placeholder={t("message")}
            />

            <span
              className={s.message_error}>
              {formerror.address}
            </span>
            {/* here */}
            <button
              className={s.send}
              onClick={Submit}
              name="button">
              {t("send")}
            </button>
            {textMessage ? <p>{t("thanks")}</p> : ""}
          </form>
        </div>
      </div>
      <img src={flower} alt="" className={s.flowers} />
    </>
  )
}

export default ContactsPage