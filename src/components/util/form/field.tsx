/* TODO: clear form upon submit
 */
import React, { useContext } from 'react';
import { IErrors, IValues, FormContext, IFormContext } from './form';

import { Row, FieldContainer, Input, TextArea } from './field.style';

// available editors for the field
type Editor = 'textbox' | 'multilinetextbox' | 'dropdown';
type SelectSelected = 'selected' | 'none';

export interface IValidation {
  rule: (values: IValues, fieldName: string, args: any) => string;
  args?: any;
}

export interface IFieldProps {
  id: string;
  label?: string;
  editor?: Editor;
  options?: string[];
  //default?: SelectSelected
  value?: any;
  validation?: IValidation;
}

export const Field: React.FC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value,
}) => {
  const { values, setValues, validate, errors, setErrors } = useContext(
    FormContext
  );

  const getError = (errors: IErrors): string => (errors ? errors[id] : '');

  const getEditorStyle = (errors: IErrors): any =>
    getError(errors) ? { borderColor: 'red' } : {};

  const renderError = (errors: IErrors) =>
    getError(errors) && (
      <div style={{ color: 'red', fontSize: '80%' }}>
        <p>{getError(errors)}</p>
      </div>
    );

  const clearForm = () => {
    setValues([]);
    setErrors({});
    console.log('Form cleared');
  };

  return (
    <FieldContainer>
      <FormContext.Consumer>
        {(_: IFormContext) => (
          <Row>
            {label && <label htmlFor={id}>{label}</label>}
            {editor!.toLowerCase() === 'textbox' && (
              <Input
                id={id}
                type="text"
                value={value}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  setValues({ ...values, [id]: e.currentTarget.value })
                }
                onBlur={() => validate(id)}
                style={getEditorStyle(errors)}
              />
            )}

            {editor!.toLowerCase() === 'multilinetextbox' && (
              <TextArea
                id={id}
                value={value}
                onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
                  setValues({ ...values, [id]: e.currentTarget.value })
                }
                onBlur={() => validate(id)}
                style={getEditorStyle(errors)}
              />
            )}

            {editor!.toLowerCase() === 'dropdown' && (
              <select
                id={id}
                value={value}
                onChange={(e: React.FormEvent<HTMLSelectElement>) =>
                  setValues({ ...values, [id]: e.currentTarget.value })
                }
                onBlur={() => validate(id)}
              >
                {options &&
                  options.map(option => (
                    <option key={option} value={option} /*selected={default}*/>
                      {option}
                    </option>
                  ))}
              </select>
            )}
            {renderError(errors)}
          </Row>
        )}
      </FormContext.Consumer>
    </FieldContainer>
  );
};
