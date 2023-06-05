import { Button } from '@/global-components/Button/Button';
import { FormInput } from '@/global-components/FormInput/FormInput';
import React, { useState } from 'react';
import { BasicValidatorType, FormType } from '../../types/types';

export const PaymentForm = () => {
  const [form, setForm] = useState<FormType>({
    fullName: {
      value: '',
    },
    cardNumber: {
      value: '',
    },
    expiryDate: {
      value: '',
    },
    CVV: {
      value: '',
    },
  });

  const basicValidator: BasicValidatorType = {
    fullName: (value: string) =>
      /([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,} )([A-Za-z0-9żźćńółęąśŻŹĆĄŚĘŁÓŃ]{3,})/.test(
        String(value)
      ),
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setForm(
      (prevState) => (prevState = { ...form, [name]: { ...form[name], value } })
    );
  };

  return (
    <form
      className='simple-form'
      onSubmit={handleSubmit}
      onChange={handleFormChange}>
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
