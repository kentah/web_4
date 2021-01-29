import React, { useState, useEffect } from 'react';
import { Form, Field } from '../../util/form';

const BlogForm: React.SFC = () => {
  return (
    <div>
      Blog Form
      <Form
        action=""
        render={() => (
          <>
            <Field id="title" label="title" editor="textbox" />
            <Field id="body" label="body" editor="multilinetextbox" />
            <Field
              id="published"
              label="published"
              editor="dropdown"
              options={['yes', 'no']}
            />
          </>
        )}
      />
    </div>
  );
};

export default BlogForm;
