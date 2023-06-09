import React from 'react';
import { PaymentForm } from '../../components/PaymentForm/PaymentForm';
import './PaymentFormPage.scss';

export const PaymentFormPage = () => {
  return (
    <div className='payment-page'>
      <div className='payment-page__form-section'>
        <div className='payment-page__form-container'>
          <h1 className='payment-page__header'>Add your informations</h1>
          <PaymentForm />
        </div>
      </div>
      <div className='payment-page__banner-section'>
        <img
          className='banner'
          src='/src/assets/images/netflix-banner.png'
          alt='netflix banner'
        />
      </div>
    </div>
  );
};
