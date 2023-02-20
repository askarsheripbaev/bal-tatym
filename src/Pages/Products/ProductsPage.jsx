import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProductsPage.module.css';

const ProductsPage = () => {
  const {t} = useTranslation();

  return (
    <div>{t("products-header")}</div>
  )
}

export default ProductsPage