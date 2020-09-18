import { put, fork, call, take } from 'redux-saga/effects'
import { fetchAboutFail } from '../../actions/about'
import { fetchPostDetailSuccess } from '../../actions/post'
import api from '../../../constants/ApiUrlForBE'
import nextFetch from '../../../core/nextFetch'
import { aboutQuery } from '../../../constants/ConstTypes'
import { FETCH_ABOUT } from '../../../constants/ActionTypes'

const fetchList = query => {
  return nextFetch.get(api.getGitHubIssues, { query })
}

/**
 * About saga
 */
function* fetchAbout() {
  while (true) {

    const { callback } = yield take(FETCH_ABOUT)
    const query = aboutQuery
    try {
      const list = yield call(fetchList, query)
      if (!!callback) {
        yield call(() => {
          callback(list)
        })
      }

      yield put(fetchPostDetailSuccess(list[0] || {}))
    } catch (e) {
      yield put(fetchAboutFail())
    }
  }
}

export default [fork(fetchAbout)]
