/* TODO: context not working correctly. Unable to pass to consumer */
import React, { createContext, useState, useContext, useEffect } from 'react';

import { FormContainer, Button } from './form.style';

type Renderable = React.ReactNode | React.ReactElement | React.ReactChild;

export interface IFormProps {
  action?: string; // http path to which the form will be posted
  render: () => Renderable; // allows content to be injected
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: string;
}

export interface IFormState {
  values: IValues;
  errors?: IErrors;
  submitSuccess?: boolean;
}

export interface IFormContext extends IFormState {
  /* allows values in the values state to be set */
  //setValues: (values: IValues) => IValues[];
}

const defaultState: IFormState = {
  values: [],
  errors: { '': '' },
};

/* The context which allows state and functions to be shared with Field
 * pass createContext a default value which is why undefined is unioned
 */
//export const FormContext = createContext<IFormContext | undefined>(undefined);
export const FormContext = createContext<any>([]);
//export const Form = <IFormProps, IFormState>(render: IFormProps) => {
//export const Form: React.FC<IFormProps> = ({ action, render }) => {
//
export const Form: React.FC<IFormProps> = ({ render }) => {
  const defaultState: IFormState = {
    values: [],
    errors: { '': '' },
  };
  const [values, setValues] = useState<IFormState>(defaultState);
  const [errors, setErrors] = useState<IFormState>();
  const [submtiSuccess, setSubmitSuccess] = useState<IFormState>();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log(values);
    //console.log(values);
    if (validateForm()) {
      const scc = await submitForm();
      //setSubmitSuccess(scc);
    }
  };

  const validateForm = (): boolean => {
    return true;
  };

  const submitForm = async (): Promise<boolean> => {
    return true;
  };

  const hasErrors = (err: IFormState): boolean => (err ? true : false);

  return (
    <FormContainer>
      <FormContext.Provider value={{ values, setValues }}>
        <form onSubmit={handleSubmit} noValidate={true}>
          <div>
            {render()}
            <div>
              <Button type="submit">Submit</Button>
            </div>
            {submtiSuccess && <div>The form was successfully submitted!</div>}
            {!submtiSuccess && !hasErrors && (
              <div>Sorry, an unexpected error occured</div>
            )}
            {submtiSuccess && hasErrors && (
              <div>Sorry, the form is invalid. Please review and try again</div>
            )}
          </div>
        </form>
      </FormContext.Provider>
    </FormContainer>
  );
};
