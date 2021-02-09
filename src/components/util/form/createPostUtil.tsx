import React, { useState } from 'react';
import {
  useMakePostMutation,
  Author,
  CreatePostInput,
} from '../../../generated/graphql';
import { IFormState, IValues } from './form';
import { useMutation } from '@apollo/react-hooks';

interface ParseFormProps extends IFormState {
  //values: IValues;
}

export interface BlogData {
  title: string;
  body: string;
  ispublished: boolean;
  //author: Author;
}

export const ParseForm: React.FC<ParseFormProps> = ({ values, errors }) => {
  //const [createPost, { loading, error }] = useMutation(useMakePostMutation);
  const { title, body, published } = values;

  const post: CreatePostInput = {
    title: title,
    body: body,
    ispublished: published,
    author: {
      id: 1,
    },
  };

  //useMakePostMutation({ title, body, published });
  console.log('from createPostUtil', post);
  return null;
};
