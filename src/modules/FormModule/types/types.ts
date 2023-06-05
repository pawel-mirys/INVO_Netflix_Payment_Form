export type FormType = {
  [key: string]: {
    value: string;
  };
};

export type BasicValidatorType = {
  [key: string]: (value: string) => boolean;
};
