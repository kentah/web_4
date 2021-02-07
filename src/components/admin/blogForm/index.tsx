import React from 'react';
import { Form, Field } from '../../util/form';
import { IFields, required, maxLength, FormRole } from '../../util/form/form';
//import { ParseForm } from '../createPostUtil';

const BlogForm: React.FC = () => {
  const fields: IFields = {
    title: {
      id: 'title',
      label: 'Title',
      editor: 'textbox',
      validation: { rule: required },
    },
    body: {
      id: 'body',
      label: 'Body',
      editor: 'multilinetextbox',
      validation: { rule: required },
    },
    published: {
      id: 'published',
      label: 'Published',
      editor: 'dropdown',
      options: ['yes', 'no'],
    },
  };

  return (
    <div>
      Blog Form
      <Form
        role={FormRole.ADMIN_BLOG}
        fields={fields}
        action=""
        render={() => (
          <>
            <Field {...fields.title} />
            <Field {...fields.body} />
            <Field {...fields.published} />
          </>
        )}
      />
    </div>
  );
};

export default BlogForm;
