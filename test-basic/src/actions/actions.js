import axios from 'axios';
import * as types from './types';

const jsonPlaceholderUrl = 'https://jsonplaceholder.typicode.com/comments';

export const saveComment = comment => {
  return {
    type: types.SAVE_COMMENT,
    payload: comment,
  };
};

export const getCommentsFromJsonPlaceholder = () => {
  return {
    type: types.GET_COMMENTS_FROM_JSON_PLACEHOLDER,
    payload: axios.get(jsonPlaceholderUrl),
  };
};
