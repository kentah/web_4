import React, { createContext, useState } from 'react';

import { IFieldProps } from './field';

import { FormContainer, Button } from './form.style';
import { ParseForm } from './createPostUtil';

type Renderable = React.ReactNode | React.ReactElement | React.ReactChild;

export enum FormRole {
  ADMIN_BLOG,
  CONTACT,
  LOGIN,
}

export type FormRoleType = Record<FormRole, Number>;

export interface IFields {
  [key: string]: IFieldProps;
}

export interface IFormProps {
  action: string; // http path to which the form will be posted
  fields: IFields; // props for all the form fields
  render: () => Renderable; // allows content to be injected
  role: FormRole;
}

export interface IValues {
  [key: string]: any;
}

export interface IErrors {
  [key: string]: string;
}

export interface IFormState {
  values: IValues;
  errors: IErrors;
  submitSuccess?: boolean;
  //validate?: (fieldName: string) => void;
}

export interface IFormContext extends IFormState {
  validate: (fieldName: string) => void;
}

//const defaultState: IFormState = {
//  values: [],
//  errors: { '': '' },
//};

/* The context which allows state and functions to be shared with Field
 * pass createContext a default value which is why undefined is unioned
 */
//export const FormContext = createContext<IFormContext | undefined>(undefined);
export const FormContext = createContext<any>(undefined);

/**
 * Validates whether a field has a value
 * @param {IValues} values - All the field values in the form
 * @param {string} fieldName - The field to validateForm
 * @returns {string} - The error message
 */
export const required = (values: IValues, fieldName: string): string =>
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === ''
    ? 'This must be populated'
    : '';

/**
 * Validates whether a field conforms to given length constraints
 * @param {IValues} values - All the field values in the form
 * @param {string} fieldName = The field to validateForm
 * @param {number} length - The maximum number of characters
 * @returns {string} - The error message
 */
export const maxLength = (
  values: IValues,
  fieldName: string,
  length: number
): string =>
  values[fieldName] && values[fieldName].length > length
    ? `This can not exceed ${length} characters`
    : '';

/**
 * Renders form
 * @param {Renderable} render - Rect.Node rendered from parent template
 * @param {IFields} fields - fields desired for form from parent template
 * @param {string} action - http string to post to
 * @param {FormRole} role - enum value used to render correct type of form
 **/
export const Form: React.FC<IFormProps> = ({
  render,
  fields,
  action,
  role,
}) => {
  const [values, setValues] = useState<IValues>([]);
  const [errors, setErrors] = useState<IErrors>({});
  const [submitSuccess, setSubmitSuccess] = useState<Boolean>();

  const validate = (fieldName: string): string => {
    console.log('validate()');
    let newError: string = '';

    if (fields[fieldName] && fields[fieldName].validation) {
      newError = fields[fieldName].validation!.rule(
        values,
        fieldName,
        fields[fieldName].validation!.args
      );
    }

    errors[fieldName] = newError;
    setErrors({ ...errors, [fieldName]: newError });
    return newError;
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    console.log('handleSubmit');
    e.preventDefault();
    ParseForm({ values, errors });
    if (validateForm()) {
      const scc: boolean = await submitForm();
      console.log('scc', scc);
      setSubmitSuccess(scc);
    }
  };

  const validateForm = (): boolean => {
    Object.keys(fields).map((fieldName: string) => {
      errors[fieldName] = validate(fieldName);
    });
    console.log('validateForm');
    setErrors(errors);
    console.log('validtateForm errors', errors);
    console.log('validtateForm hasErrors(errors)', hasErrors(errors));
    return hasErrors(errors);
  };

  const submitForm = async (): Promise<boolean> => {
    console.log('submitform');
    switch (role) {
      case FormRole.ADMIN_BLOG:
        console.log('AdminBlog');
        ParseForm({ values, errors });
        return true;
      case FormRole.LOGIN:
        console.log('login');
        return true;
      case FormRole.CONTACT:
        console.log('contact');
        return true;
      default:
        console.log('default');
        try {
          const response = await fetch(action, {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json',
              Accept: 'application/json',
            }),
            body: JSON.stringify(values),
          });
          return response.ok;
        } catch (ex) {
          return false;
        }
    }
  };

  const hasErrors = (err: IErrors): boolean => (err ? true : false);

  return (
    <FormContainer>
      <FormContext.Provider value={{ values, setValues, errors, validate }}>
        <form onSubmit={handleSubmit} noValidate={true}>
          <div>
            {render()}
            <div>
              <Button type="submit">Submit</Button>
            </div>
            {submitSuccess && <div>The form was successfully submitted!</div>}
            {submitSuccess === false && !hasErrors(errors) && (
              <div>Sorry, an unexpected error has occurred</div>
            )}
            {submitSuccess === false && hasErrors(errors) && (
              <div>
                Sorry, the form is invalid.Please review, adjust and try again
              </div>
            )}
          </div>
        </form>
      </FormContext.Provider>
    </FormContainer>
  );
};
