export type FormType = {
  [key: string]: {
    value: string;
    isValid: boolean;
    errorMessage?: string;
  };
};

export type BasicValidatorType = {
  [key: string]: (value: string) => boolean | string;
};
