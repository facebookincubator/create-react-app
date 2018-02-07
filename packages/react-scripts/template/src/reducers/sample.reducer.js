// @flow
import { set, keyBy } from 'lodash/fp';
import { handleActions } from 'redux-actions';

import type { Action } from 'types/redux.types';
import type { PostsMap } from 'types/api.types';

import * as POSTS from 'actions/sample.actions';

export type PostsState = {|
  posts: PostsMap,
|};

const initialState: PostsState = {
  posts: {},
};

const sampleReducer = handleActions(
  {
    [POSTS.SET]: (
      state: PostsState,
      { payload: { posts } }: Action
    ): PostsState => set('posts', keyBy('id', posts), state),
  },
  initialState
);

export default sampleReducer;
