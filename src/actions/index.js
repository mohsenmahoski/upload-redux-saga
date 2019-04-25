export const ActionTypes = {
    UPLOAD_REQUEST:  'UPLOAD_REQUEST',
    UPLOAD_PROGRESS: 'UPLOAD_PROGRESS',
    UPLOAD_SUCCESS:  'UPLOAD_SUCCESS',
    UPLOAD_FAILURE:  'UPLOAD_FAILURE',
};
export const uploadRequest = (file) => {
    console.log(file);
    return({
        type: ActionTypes.UPLOAD_REQUEST,
        payload: file,    
    })

};
export const uploadProgress = (file, progress) =>{
    console.log(progress);
    return({
        type: ActionTypes.UPLOAD_PROGRESS,
        progress,
        meta: { file },    
    })
};
export const uploadSuccess = (file) => ({
    type: ActionTypes.UPLOAD_SUCCESS,
    meta: { file },
});
export const uploadFailure = (file, err) => ({
    type: ActionTypes.UPLOAD_FAILURE,
    progress: err,
    error: true,
    meta: { file },
});

export const getNews = () => ({
    type: 'GET_NEWS',
});
