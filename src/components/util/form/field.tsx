/* TODO: consumer unable to parse values. Delete consumer and (values: IFormContext)
 * if needed. Start and end JSX at the div
 */
import React, { useContext } from 'react';
import { IErrors, IFormContext, FormContext, IFormState } from './form';

import { Row, FieldContainer, Input, TextArea } from './field.style';

// available editors for the field
type Editor = 'textbox' | 'multilinetextbox' | 'dropdown';

export interface IFieldProps {
  id: string;
  label?: string;
  editor?: Editor;
  options?: string[];
  value?: any;
}

export const Field: React.FC<IFieldProps> = ({
  id,
  label,
  editor,
  options,
  value,
}) => {
  const { values, setValues } = useContext(FormContext);

  return (
    <FieldContainer>
      {/* <FormContext.Consumer> */}
      <Row>
        {label && <label htmlFor={id}>{label}</label>}
        {editor!.toLowerCase() === 'textbox' && (
          <Input
            id={id}
            type="text"
            value={value}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              //context?.setValues({ [id]: e.currentTarget.value })
              setValues({ ...values, [id]: e.currentTarget.value })
            }
            onBlur={
              (e: React.FormEvent<HTMLInputElement>) => null
              /* TODO: validate field value */
            }
          />
        )}

        {editor!.toLowerCase() === 'multilinetextbox' && (
          <TextArea
            id={id}
            value={value}
            onChange={(e: React.FormEvent<HTMLTextAreaElement>) =>
              //context?.setValues({ [id]: e.currentTarget.value })
              setValues({ ...values, [id]: e.currentTarget.value })
            }
            onBlur={
              (e: React.FormEvent<HTMLTextAreaElement>) => null
              /* TODO: validate field value */
            }
          />
        )}

        {editor!.toLowerCase() === 'dropdown' && (
          <select
            id={id}
            value={value}
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              //context?.setValues({ [id]: e.currentTarget.value })
              setValues({ ...values, [id]: e.currentTarget.value })
            }
            onBlur={
              (e: React.FormEvent<HTMLSelectElement>) => null
              /* TODO: validate field value */
            }
          >
            {options &&
              options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
          </select>
        )}
        {/* TODO - display validation errors */}
      </Row>
      {/*</FormContext.Consumer> */}
    </FieldContainer>
  );
};
