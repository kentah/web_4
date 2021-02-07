import React, { useState } from 'react';
import {
  useMakePostMutation,
  Author,
  MakePostDocument,
} from '../../../generated/graphql';
import { IFormState, IValues } from './form';
import { useMutation } from '@apollo/client';

interface ParseFormProps extends IFormState {
  //values: IValues;
}

//interface BlogData {
//  title: string;
//  body: string;
//  ispublished: boolean;
//  author: Author;
//}

export const ParseForm: React.FC<ParseFormProps> = ({ values, errors }) => {
  //const [createPost, { loading, error }] = useMutation(useMakePostMutation);
  const { title, body } = values;
  //const post = {
  //  title,
  //  body,
  //  ispublished: false,
  //  //author: {
  //  //  id: 1,
  //  //},
  //};
  useMakePostMutation(values);
  console.log('from createPostUtil', values);
  return null;
};
