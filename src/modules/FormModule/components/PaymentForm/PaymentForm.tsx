import { Button } from '@/global-components/Button/Button';
import { FormInput } from '@/global-components/FormInput/FormInput';
import React from 'react';

export const PaymentForm = () => {
  return (
    <form className='simple-form'>
      <FormInput type='text' name='fullName' placeholder='Name on card' />
      <FormInput type='text' name='cardNumber' placeholder='Card number' />
      <div className='simple-form__flex-container'>
        <FormInput
          type='text'
          name='expiryDate'
          placeholder='Expiry date (MM/YY)'
        />
        <FormInput type='text' name='CVV' placeholder='CVV' />
      </div>
      <Button type='submit'>Next Step</Button>
    </form>
  );
};
