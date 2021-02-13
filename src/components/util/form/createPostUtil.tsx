import { useMakePostMutation } from '../../../generated/graphql';
import { IFormState, IValues, IErrors } from './form';

interface ParseFormProps extends IFormState {
  values: IValues;
  errors: IErrors;
}

export interface BlogData {
  title: string;
  body: string;
  ispublished: boolean;
}

const [makePost, { error, data }] = useMakePostMutation({
  variables: {
    title: '',
    body: '',
    ispublished: false,
  },
});

export const CreatePost = async (values: IValues) => {
  const { title, body, ispublished } = values;

  try {
    await makePost({
      variables: {
        title,
        body,
        ispublished: false,
      },
    });
  } catch (error) {
    console.log('Error: ', error);
  }
};
