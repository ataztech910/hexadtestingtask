import {
  delay, put, fork, cancel, take,
} from 'redux-saga/effects';

const MAX_DELAY_TIME = 2000;
const MIN_DELAY_TIME = 500;
function* TimerAction() {
  while (true) {
    yield delay(Math.floor(Math.random() * (MAX_DELAY_TIME - MIN_DELAY_TIME + 1)) + MIN_DELAY_TIME);
    yield put({ type: 'CHECK_PROCESS_STATUS' });
  }
}

function* myTimer() {
  while (yield take('ACT_RANDOM_PROCESS')) {
    const bgSyncTask = yield fork(TimerAction);
    yield take('ACT_RANDOM_PROCESS');
    yield cancel(bgSyncTask);
  }
}

export default myTimer;
