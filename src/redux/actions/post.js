import {
  FETCH_POST_LIST,
  FETCH_POST_LIST_FAIL,
  FETCH_POST_LIST_SUCCESS,
  FETCH_POST_DETAIL,
  FETCH_POST_DETAIL_FAIL,
  FETCH_POST_DETAIL_SUCCESS,
  SAVE_QUERY_PARAMS,
  GET_POSTS_AMOUNT,
  GET_POSTS_AMOUNT_SUCCESS,
  GET_POSTS_AMOUNT_FAIL,
  SAVE_LIST_STATE,
  SAVE_FETCHED_LIST,
} from '@/constants/ActionTypes'

export const saveQueryParams = payload =>
  !!payload.noCache
    ? {
        type: SAVE_QUERY_PARAMS,
        payload: {},
      }
    : {
        type: SAVE_QUERY_PARAMS,
        payload,
      }

export const fetchPostList = (payload, callback) => ({
  type: FETCH_POST_LIST,
  payload,
  callback,
})

export const fetchPostListFail = payload => ({
  type: FETCH_POST_LIST_FAIL,
  payload,
})

export const fetchPostListSuccess = payload => ({
  type: FETCH_POST_LIST_SUCCESS,
  payload,
})

export const fetchPostDetail = payload => ({
  type: FETCH_POST_DETAIL,
  payload,
})

export const fetchPostDetailFail = payload => ({
  type: FETCH_POST_DETAIL_FAIL,
  payload,
})

export const fetchPostDetailSuccess = payload => ({
  type: FETCH_POST_DETAIL_SUCCESS,
  payload,
})

// 该方法用于获取标签为 post 的 issue 的总数
export const getPostsAmount = payload => ({
  type: GET_POSTS_AMOUNT,
  payload: payload,
})

export const getPostsAmountSuccess = payload => ({
  type: GET_POSTS_AMOUNT_SUCCESS,
  payload,
})

export const getPostsAmountFail = payload => ({
  type: GET_POSTS_AMOUNT_FAIL,
  payload,
})

export const saveListState = payload => ({
  type: SAVE_LIST_STATE,
  payload,
})

export const saveFetchedList = payload => ({
  type: SAVE_FETCHED_LIST,
  payload,
})
