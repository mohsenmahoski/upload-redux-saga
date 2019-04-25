import { put,takeEvery,take, all ,call } from 'redux-saga/effects';
import { ActionTypes, uploadProgress, uploadSuccess, uploadFailure } from '../actions';
import { createUploadFileChannel } from './createUploadFileChannel';

export function* uploadRequestWatcherSaga() {
    yield takeEvery(ActionTypes.UPLOAD_REQUEST, function*(action) {
        const file = action.payload;
        yield call(uploadFileSaga, file);
    });
}
// Upload the specified file
export function* uploadFileSaga(file) {
    const channel = yield call(createUploadFileChannel, 'https://upload.uploadcare.com/base/', file);
    while (true) {
        const { progress = 0, err, success } = yield take(channel);
        if (err) {
            yield put(uploadFailure(file, err));
            return;
        }
        if (success) {
            yield put(uploadSuccess(file));
            return;
        }
        yield put(uploadProgress(file, progress));
    }
}




export default function* rootSaga() {
   yield all([
   uploadRequestWatcherSaga()
   ]);
}
