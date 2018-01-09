import { createReducer, SiteConf } from 'base'
import ActionTypes from '../actionTypes'
import { PostModel } from '../models'

const postRequest = state => state

const postError = state => state

const postSuccess = (state, { payload }) => ( 
  state
    .merge(payload)
    .set('author', SiteConf.Author)
)

const cleanPost = state => (
  state
    .set('id', -1)
    .set('tags', [])
    .set('html', '')
    .set('title', '')
    .set('image', '')
    .set('author', '')
    .set('published_at', '')
    .set('feature_image', '')
)

const actionHandlers = {
  [ActionTypes.POST_REQUEST]: postRequest,
  [ActionTypes.POST_SUCCESS]: postSuccess,
  [ActionTypes.POST_ERROR]: postError,
  [ActionTypes.CLEAN_POST]: cleanPost,
}

export default createReducer(actionHandlers, new PostModel())
